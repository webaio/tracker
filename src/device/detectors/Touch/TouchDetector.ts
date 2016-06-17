import {Detector} from '../../Detector';
import {Device} from '../../Device';

const TOUCH_EVENT = 'touchstart';

export class TouchDetector implements Detector {
    private window: any;
    private navigator: Navigator;

    constructor(window: any, navigator: Navigator) {
        this.window = window;
        this.navigator = navigator;
    }

    public detect(device: Device): void {
        device.isTouch =  TOUCH_EVENT in this.window || !!(this.navigator.msMaxTouchPoints);
    }
}
