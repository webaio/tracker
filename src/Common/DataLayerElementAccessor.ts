export class DataLayerElementAccessor {
    public access(elementName: any, dataLayerElementPayload: any, defaultValue: any) {
        if (dataLayerElementPayload.hasOwnProperty(elementName)) {
            return dataLayerElementPayload[elementName];
        } else {
            return defaultValue;
        }
    }
}
