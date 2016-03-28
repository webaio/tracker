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
    }

    getDevice(): Device {
        return this.deviceBuilder.getDevice();
    }
}