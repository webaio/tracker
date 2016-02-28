import { ScreenSize } from './ScreenSize';

export class ScreenSizeDetector implements ScreenSize {
    private window: Window;

    constructor(window: any) {
        this.window = window;

    }

    getAvailableWidth(): number {
        return this.window.screen.width;
    }

    getAvailableHeight(): number {
        return this.window.screen.height;
    }

}