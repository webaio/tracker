export class CustomMetric {
    private _index: number;
    private _value: number;

    constructor(index: number, value: number) {
        this._index = index;
        this._value = value;
    }

    get index(): number {
        return this._index;
    }

    get value(): number {
        return this._value;
    }
}
