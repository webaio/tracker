import {Detector} from '../../Detector';
import {Device} from '../../Device';

export class ScreenSizeDetector implements Detector {
    private global: any;

    constructor(global: any) {
        this.global = global;
    }

    public detect(device: Device): void {
        device.availableWidth  = this.global.screen.width;
        device.availableHeight  = this.global.screen.height;
    }
}
