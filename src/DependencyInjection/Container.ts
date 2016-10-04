export class Container {
    private items: Array<any>;
    private instanced: Array<any>;

    constructor() {
        this.instanced = [];
        this.items = [];
    }

    public get(key: string): any {
        if (!this._has(key)) {
            throw new Error(`Identifier "${key}" is not defined.`);
        }

        let item: any = this.items[key];

        if (!this.instanced.hasOwnProperty(key)) {
            this.instanced[key] = item(this);
        }

        return this.instanced[key];
    }

    public set(key: string, val: any) {
        this.items[key] = val;
    }

    private _has(key: string): boolean {
        return this.items.hasOwnProperty(key);
    }
}
