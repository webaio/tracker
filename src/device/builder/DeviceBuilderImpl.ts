import { DeviceBuilder } from './DeviceBuilder';
import { Device } from './../Device';
import { ScreenSize } from '../detectors/ScreenSize/ScreenSize';
import { WindowSize } from '../detectors/WindowSize/WindowSize';

export class DeviceBuilderImpl implements DeviceBuilder {
    private device: Device;
    private screenSizeDetector: ScreenSize;
    private windowSizeDetector: WindowSize;

    constructor(screenSizeDetector: ScreenSize, windowSizeDetector: WindowSize) {
        this.device = new Device();

        this.screenSizeDetector = screenSizeDetector;
        this.windowSizeDetector = windowSizeDetector;
    }

    buildWidth() {
        this.device.width = this.windowSizeDetector.getWidth();
    }

    buildHeight() {
        this.device.height = this.windowSizeDetector.getHeight();
    }

    buildAvailableWidth() {
        this.device.availableWidth = this.screenSizeDetector.getAvailableWidth();
    }

    buildAvailableHeight() {
        this.device.availableHeight = this.screenSizeDetector.getAvailableHeight();
    }

    getDevice(): Device {
        return this.device;
    }
}