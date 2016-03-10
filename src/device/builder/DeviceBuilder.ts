import { Device } from '../Device';
export interface DeviceBuilder {
    buildWidth();
    buildHeight();
    buildAvailableWidth();
    buildAvailableHeight();
    getDevice(): Device;
}