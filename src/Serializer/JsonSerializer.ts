import { Serializer } from "./Serializer";

export class JsonSerializer implements Serializer {
    public serialize(data: Object): string {
        return JSON.stringify(data);
    }

    public deserialize(serialized: string): Object {
        return JSON.parse(serialized);
    }
}
