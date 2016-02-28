import { DeviceBuilder } from './DeviceBuilder';
import { Device } from './../Device';
import { DeviceImpl } from './../DeviceImpl';
import { ScreenSize } from '../detectors/ScreenSize';
import { WindowSize } from '../detectors/WindowSize';

export class DeviceBuilderImpl implements DeviceBuilder {

    private device: Device;
    private screenSizeDetector: ScreenSize;
    private windowSizeDetector: WindowSize;

    constructor(screenSizeDetector: ScreenSize, windowSizeDetector: WindowSize) {
        this.device = new DeviceImpl();

        this.screenSizeDetector = screenSizeDetector;
        this.windowSizeDetector = windowSizeDetector;
    }

    buildWidth() {
        this.device.setWidth(this.windowSizeDetector.getWidth());
    }

    buildHeight() {
        this.device.setHeight(this.windowSizeDetector.getHeight());
    }

    buildAvailableWidth() {
        this.device.setAvailableWidth(this.screenSizeDetector.getAvailableWidth());
    }

    buildAvailableHeight() {
        this.device.setAvailableHeight(this.screenSizeDetector.getAvailableHeight());
    }

    getDevice():Device {
        return this.device;
    }
}