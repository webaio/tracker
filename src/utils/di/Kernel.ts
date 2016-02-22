export class Kernel {
    private deps: Array<any>;
    constructor () {
        this.deps = new Array<any>();
    }

    getDeps () {
        return this.deps;
    }
}