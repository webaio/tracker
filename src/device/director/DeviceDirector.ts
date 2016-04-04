import {DeviceBuilder} from '../builder/DeviceBuilder';
import {Device} from '../Device';

export class DeviceDirector {
    private deviceBuilder: DeviceBuilder;

    constructor(deviceBuilder: DeviceBuilder) {
        this.deviceBuilder = deviceBuilder;
    }

    buildDevice() {
        this.deviceBuilder.buildHeight();
        this.deviceBuilder.buildWidth();
        this.deviceBuilder.buildAvailableHeight();
        this.deviceBuilder.buildAvailableWidth();
        this.deviceBuilder.buildIsLocalStorage();
        this.deviceBuilder.buildIsSessionStorage();
        this.deviceBuilder.buildIsAdBlock();
        this.deviceBuilder.buildIsJavascript();
        this.deviceBuilder.buildIsPdf();
        this.deviceBuilder.buildIsCanvas();
        this.deviceBuilder.buildIsFlash();
        this.deviceBuilder.buildIsSilverlight();
        this.deviceBuilder.buildIsCookie();
        this.deviceBuilder.buildIsTouch();
        this.deviceBuilder.buildIsQuickTime();
        this.deviceBuilder.buildIsJava();
    }

    getDevice(): Device {
        return this.deviceBuilder.getDevice();
    }
}