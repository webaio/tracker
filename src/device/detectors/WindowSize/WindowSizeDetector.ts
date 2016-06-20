import {Detector} from '../../Detector';
import {Device} from '../../Device';

export class WindowSizeDetector implements Detector {
    private global: any;

    constructor(global: any) {
        this.global = global;
    }

    public detect(device: Device): void {
        device.width = this.global.document.documentElement.clientWidth;
        device.height = this.global.document.documentElement.clientHeight;
    }
}
