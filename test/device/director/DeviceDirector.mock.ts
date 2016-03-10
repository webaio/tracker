import { Device } from '../../../src/device/Device';

interface DeviceBuilder {
    buildWidth();
    buildHeight();
    buildAvailableWidth();
    buildAvailableHeight();
    getDevice():Device;
}

export class DeviceBuilderImpl implements DeviceBuilder {
    private device: Device;

    constructor(){
        this.device = new Device();
    }

    buildWidth(){};
    buildHeight(){};
    buildAvailableWidth(){};
    buildAvailableHeight(){};
    getDevice(){return this.device};
}