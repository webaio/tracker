export class Container {
    private items: any;

    constructor() {
        this.items = {};
    }

    get(key: string): any {
        if (!this.has(key)) {
            throw new Error(`Identifier "${key}" is not defined.`);
        }

        let item: any = this.items[key];

        return item(this);
    }

    set(key: string, val: any) {
        this.items[key] = val;
    }

    has(key: string): boolean {
        return this.items.hasOwnProperty(key);
    }
}
