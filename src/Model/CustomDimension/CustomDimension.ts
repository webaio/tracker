export class CustomDimension {
    private _index: number;
    private _value: string;

    constructor(index: number, value: string) {
        this._index = index;
        this._value = value;
    }

    get index(): number {
        return this._index;
    }

    get value(): string {
        return this._value;
    }
}
