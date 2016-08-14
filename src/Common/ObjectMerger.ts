export class ObjectMerger {
    public merge(target: any, source: any) {
        if (typeof target !== "object") {
            target = {};
        }

        for (let property in source) {

            if (source.hasOwnProperty(property)) {

                let sourceProperty = source[property];

                if (typeof sourceProperty === "object") {
                    target[property] = this.merge(target[property], sourceProperty);

                    continue;
                }

                target[property] = sourceProperty;
            }

        }

        for (let a = 2, l = arguments.length; a < l; a++) {
            this.merge(target, arguments[a]);
        }

        return target;
    };
}
