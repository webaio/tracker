/// <reference path="../../typings/globals/es6-collections/index.d.ts" />

function assert(ok, message) {
    if (!ok) {
        throw new Error(message);
    }
}

function isFunction(fn) {
    return Object.prototype.toString.call(fn) === "[object Function]" && fn.constructor.name === "Function";
}

function checkDefined(container, key) {
    assert(container.has(key), `Identifier "${key}" is not defined.`);
}

function addFunctionTo(set, fn) {
    assert(isFunction(fn), "Service definition is not a Closure or invokable object");
    set.add(fn);
    return fn;
}

export class Container {
    private items: any;
    private instances: Map<any, any>;
    private factories: Set<any>;
    private protectedObjects: Set<any>;

    constructor() {
        this.items = {};
        this.instances = new Map<any, any>();
        this.factories = new Set<any>();
        this.protectedObjects = new Set<any>();
    }

    get(key) {
        checkDefined(this, key);
        let item = this.items[key];
        let obj;
        if (isFunction(item)) {
            if (this.protectedObjects.has(item)) {
                obj = item;
            } else if (this.instances.has(item)) {
                obj = this.instances.get(item);
            } else {
                obj = item(this);
                if (!this.factories.has(item)) {
                    this.instances.set(item, obj);
                }
            }
        } else {
            obj = item;
        }
        return obj;
    }

    set(key, val) {
        this.items[key] = val;
    }

    has(key) {
        return this.items.hasOwnProperty(key);
    }

    factory(fn) {
        return addFunctionTo(this.factories, fn);
    }

    protect(fn) {
        return addFunctionTo(this.protectedObjects, fn);
    }

    keys() {
        return Object.keys(this.items);
    }

    extend(key, fn) {
        checkDefined(this, key);
        let originalItem = this.items[key];
        assert(
            isFunction(originalItem) &&
            this.protectedObjects.has(originalItem) === false,
            `Identifier "${key}" does not contain a service definition`
        );
        assert(isFunction(fn), `The "new" service definition for "${key}" is not a invokable object.`);
        this.items[key] = function(app) {
            return fn(originalItem(app), app);
        };
        if (this.factories.has(originalItem)) {
            this.factories.delete(originalItem);
            this.factories.add(this.items[key]);
        }
    }

    register(provider) {
        provider.register(this);
    }

    raw(key) {
        checkDefined(this, key);

        return this.items[key];
    }
}
