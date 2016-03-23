import { EventHandler } from './event/handler/EventHandler';
import { ParametersDirector } from './parameters/director/ParametersDirector';
import { RequestHandler } from './request/handler/RequestHandler';
import { ParametersNormalizer } from './parameters/normalizer/ParametersNormalizer';
import { ParametersBuilder } from './parameters/builder/ParametersBuilder';
import { ParametersBuilderImpl } from './parameters/builder/ParametersBuilderImpl';
import { Config } from './config/Config';
import { ConfigImpl } from './config/ConfigImpl';
import { DeviceDirector } from './device/director/DeviceDirector';
import { DeviceBuilder } from './device/builder/DeviceBuilder';
import { DeviceBuilderImpl } from './device/builder/DeviceBuilderImpl';
import { ScreenSize } from './device/detectors/ScreenSize/ScreenSize';
import { WindowSize } from './device/detectors/WindowSize/WindowSize';
import { ScreenSizeDetector } from './device/detectors/ScreenSize/ScreenSizeDetector';
import { WindowSizeDetector } from './device/detectors/WindowSize/WindowSizeDetector';
import { QueryStringBuilder } from './queryString/builder/QueryStringBuilder';
import { Ajax } from './request/types/Ajax';

let pageview = {
    event: 'pageview',
    date: new Date().toISOString()
};

const MAX_DATALAYER_SIZE: number = 300;

let global: any,
    push: any,
    dataLayer: Array<any>,
    eventHandler: EventHandler,
    config: Config,
    screenSizeDetector: ScreenSize,
    windowSizeDetector: WindowSize,
    deviceBuilder: DeviceBuilder,
    deviceDirector: DeviceDirector,
    parametersDirector: ParametersDirector,
    parametersBuilder: ParametersBuilder,
    queryStringBuilder: QueryStringBuilder,
    ajax: Ajax,
    requestHandler: RequestHandler,
    parametersNormalizer: ParametersNormalizer;

dataLayer = [];
global = window;
global.dataLayer = global.dataLayer || [];
push = global.dataLayer.push;

let scripts: any = document.getElementsByTagName('script');
let scriptElement: HTMLScriptElement = <HTMLScriptElement>scripts[0];

config = new ConfigImpl(scriptElement);
parametersNormalizer = new ParametersNormalizer();
queryStringBuilder = new QueryStringBuilder();
ajax = new Ajax();
requestHandler = new RequestHandler(queryStringBuilder, config, ajax);
screenSizeDetector = new ScreenSizeDetector(global);
windowSizeDetector = new WindowSizeDetector(global);
deviceBuilder = new DeviceBuilderImpl(screenSizeDetector, windowSizeDetector);
deviceDirector = new DeviceDirector(deviceBuilder);
parametersBuilder = new ParametersBuilderImpl(config, global, deviceDirector);
parametersDirector = new ParametersDirector(parametersBuilder);
eventHandler = new EventHandler(parametersDirector, requestHandler, parametersNormalizer);

console.log(config);

global.dataLayer.push = (...dataLayerElements) => {
    push.apply(global.dataLayer, Array.prototype.slice.call(dataLayerElements, 0));

    for (dataLayer.push.apply(dataLayer, dataLayerElements); global.dataLayer.length > MAX_DATALAYER_SIZE; ) {
        global.dataLayer.shift();
    }

    eventHandler.handle(dataLayerElements);
};

global.dataLayer.push(pageview);