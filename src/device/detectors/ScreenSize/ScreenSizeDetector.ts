export class ScreenSizeDetector {
    private global: any;

    constructor(global: any) {
        this.global = global;
    }

    getAvailableWidth(): number {
        return this.global.screen.width;
    }

    getAvailableHeight(): number {
        return this.global.screen.height;
    }
}