import { Device } from '../Device';
export interface DeviceBuilder {
    buildWidth();
    buildHeight();
    buildAvailableWidth();
    buildAvailableHeight();
    buildIsLocalStorage();
    buildIsSessionStorage();
    buildIsAdBlock();
    buildIsJavascript();
    buildIsPdf();
    buildIsCanvas();
    buildIsFlash();
    getDevice(): Device;
}