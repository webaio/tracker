import {Detector} from '../../Detector';
import {Device} from '../../Device';

export class CanvasDetector implements Detector {
    private global: any;

    constructor(global: any) {
        this.global = global;
    }

    public detect(device: Device): void {
        let element = this.global.document.createElement('canvas');
        device.isCanvas = !!(element.getContext && element.getContext('2d'));
    }
}
