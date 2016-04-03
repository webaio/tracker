const TOUCH_EVENT = 'touchstart';

export class TouchDetector {
    private window: any;
    private navigator: Navigator;

    constructor (window: any, navigator: Navigator) {
        this.window = window;
        this.navigator = navigator;
    }

    isTouch () {
        return TOUCH_EVENT in this.window || !!(this.navigator.msMaxTouchPoints);
    }
}
