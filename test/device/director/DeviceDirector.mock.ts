import { Device } from '../../../src/device/Device';
import { DeviceImpl} from '../../../src/device/DeviceImpl';

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
        this.device = new DeviceImpl();
    }
    buildWidth(){};
    buildHeight(){};
    buildAvailableWidth(){};
    buildAvailableHeight(){};
    getDevice(){return this.device};
}