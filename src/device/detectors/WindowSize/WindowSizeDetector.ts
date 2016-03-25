export class WindowSizeDetector {
    private global: any;

    constructor(global: any) {
        this.global = global;
    }

    getWidth(): number {
        return this.global.document.documentElement.clientWidth;
    }

    getHeight(): number {
        return this.global.document.documentElement.clientHeight;
    }
}