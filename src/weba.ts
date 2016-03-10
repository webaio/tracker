import { DeviceBuilder } from './device/builder/DeviceBuilder';
import { DeviceBuilderImpl } from './device/builder/DeviceBuilderImpl';
import { DeviceDirector } from './device/director/DeviceDirector';
import { Config } from './config/Config';
import { ConfigImpl } from './config/ConfigImpl';
import { WindowSizeDetector } from './device/detectors/WindowSize/WindowSizeDetector';
import { ScreenSizeDetector } from './device/detectors/ScreenSize/ScreenSizeDetector';

const WEBA_SCRIPT_ID: string = 'weba-tracker',
    MAX_DATALAYER_SIZE: number = 300;

let pageview: Object,
    global: any,
    push: any,
    dataLayer: Array<any>,
    config: Config,
    scriptElement: HTMLScriptElement,
    windowSizeDetector: WindowSizeDetector,
    screenSizeDetector: ScreenSizeDetector,
    deviceBuilder: DeviceBuilder,
    deviceDirector: DeviceDirector;

pageview = {
    event: 'pageview',
    createdAt: new Date().toISOString()
};

windowSizeDetector = new WindowSizeDetector(window);
screenSizeDetector = new ScreenSizeDetector(window);
deviceBuilder = new DeviceBuilderImpl(screenSizeDetector, windowSizeDetector);
deviceDirector = new DeviceDirector(deviceBuilder);
config = new ConfigImpl();

global = window;
global.dataLayer = global.dataLayer || [];

push = global.dataLayer.push;

scriptElement = <HTMLScriptElement>document.getElementById(WEBA_SCRIPT_ID);
config.read(scriptElement);

dataLayer = [];

global.dataLayer.push = (...args) => {
    push.apply(global.dataLayer, Array.prototype.slice.call(args, 0));

    for (dataLayer.push.apply(dataLayer, args); global.dataLayer.length > MAX_DATALAYER_SIZE; ) {
        global.dataLayer.shift();
    }

    deviceDirector.buildDevice();
    console.log(deviceDirector.getDevice());
};

global.dataLayer.push(pageview);