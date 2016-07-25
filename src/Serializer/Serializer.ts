export interface Serializer {
    serialize(data: Object): string;
    deserialize(serialized: string): Object;
}
