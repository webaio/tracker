export class Container {
    private items: any = {};

    public get(key: string): any {
        if (!this._has(key)) {
            throw new Error(`Identifier "${key}" is not defined.`);
        }

        let item: any = this.items[key];

        return item(this);
    }

    public set(key: string, val: any) {
        this.items[key] = val;
    }

    private _has(key: string): boolean {
        return this.items.hasOwnProperty(key);
    }
}
