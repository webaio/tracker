export class PropertyAccessor {
    public access(objectProperty: any, customObject: any, defaultValue: any) {
        if (customObject.hasOwnProperty(objectProperty)) {
            return customObject[objectProperty];
        }

        return defaultValue;
    }
}
