export class Queue {
    constructor(private elements: Array<any>) {}

    public consume(callback: Function) {
        for (let i = 0; i < this.elements.length; i++) {
            callback(i, this.elements[i]);
        }
    }
}
