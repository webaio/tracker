import { DeviceBuilder } from './device/builder/DeviceBuilder';
import { DeviceBuilderImpl } from './device/builder/DeviceBuilderImpl';
import { DeviceDirector } from './device/director/DeviceDirector';
import { Config } from './config/Config';
import { ConfigReader } from './config/ConfigReader';

const WEBA_SCRIPT_ID = 'weba-tracker';

let scriptElement: any = document.getElementById(WEBA_SCRIPT_ID),
    configReader: ConfigReader = new ConfigReader(scriptElement),
    config: Config = configReader.read();

import { WindowSizeDetector } from './device/detectors/WindowSizeDetector';
import { ScreenSizeDetector } from './device/detectors/ScreenSizeDetector';


let windowSizeDetector = new WindowSizeDetector(window);
let screenSizeDetector = new ScreenSizeDetector(window);


let deviceBuilder: DeviceBuilder = new DeviceBuilderImpl(screenSizeDetector, windowSizeDetector);
let deviceDirector: DeviceDirector = new DeviceDirector(deviceBuilder);

deviceDirector.buildDevice();

console.log(config);
console.log(deviceDirector.getDevice());
