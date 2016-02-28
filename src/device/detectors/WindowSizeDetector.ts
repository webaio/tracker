import { WindowSize } from './WindowSize';

export class WindowSizeDetector implements WindowSize {
    private window: Window;

    constructor(window: any) {
        this.window = window;

    }

    getWidth(): number {
        return this.window.document.documentElement.clientWidth;
    }

    getHeight(): number {
        return this.window.document.documentElement.clientHeight;
    }

}