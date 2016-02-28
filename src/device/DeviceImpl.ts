import { Device } from './Device';

export class DeviceImpl implements Device {
    public width: number;
    public height: number;
    public availableWidth: number;
    public availableHeight: number;

    setWidth(width: number) {
        this.width = width;
    }
    setHeight(height: number) {
        this.height = height;
    }
    setAvailableWidth(availableWidth: number) {
        this.availableWidth = availableWidth;
    } 
    setAvailableHeight(availableHeight: number) {
        this.availableHeight = availableHeight;
    }
}