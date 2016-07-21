export class Cookie {
    private _name: string;
    private _value: string;
    private _path: string;
    private _domain: string;
    private _maxAge: number;
    private _expires: string;

    constructor(name: string, value: string, path: string = '/', domain?: string, maxAge?: number, expires?: string) {
        this._name = name;
        this._value = value;
        this._path = path;
        this._domain = domain;
        this._maxAge = maxAge;
        this._expires = expires;
    }

    public toString() {
        return this._name + "=" + this._value;
    }
}
