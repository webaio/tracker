export interface Serializer {
    serialize(data: any): string;
    deserialize(serialized: string): any;
}
