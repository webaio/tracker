import { Device } from '../../../src/device/Device';
import { DeviceBuilder } from '../../../src/device/builder/DeviceBuilder';

export class DeviceBuilderImpl implements DeviceBuilder {
    private device: Device;

    constructor(){
        this.device = new Device();
    }

    buildWidth(){};
    buildHeight(){};
    buildAvailableWidth(){};
    buildAvailableHeight(){};
    buildIsLocalStorage(){};
    buildIsSessionStorage(){};
    buildIsAdBlock(){};
    buildIsJavascript(){};
    buildIsPdf(){};
    buildIsCanvas(){};
    buildIsFlash(){};
    buildIsSilverlight(){};
    buildIsCookie(){};
    buildIsTouch(){};
    buildIsQuickTime(){};
    getDevice(){return this.device};
}