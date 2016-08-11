export class PropertyAccessor {
    public access(objectProperty: string, customObject: any, defaultValue: any): any {
        if (customObject.hasOwnProperty(objectProperty)) {
            return customObject[objectProperty];
        }

        return defaultValue;
    }
}
