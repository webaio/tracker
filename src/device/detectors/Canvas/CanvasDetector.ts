export class CanvasDetector {
    private global: any;

    constructor(global: any) {
        this.global = global;
    }

    isCanvas(): boolean {
        let element = this.global.document.createElement('canvas');
        return !!(element.getContext && element.getContext('2d'));
    }
}