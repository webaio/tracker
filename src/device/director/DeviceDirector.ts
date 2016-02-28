import {DeviceBuilder} from "../builder/DeviceBuilder";
import {Device} from "../Device";

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
    }

    getDevice(): Device {
        return this.deviceBuilder.getDevice();
    }
}