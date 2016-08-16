import { Serializer } from "./Serializer";

export class JsonSerializer implements Serializer {
    public serialize(data: any): string {
        return JSON.stringify(data);
    }

    public deserialize(serialized: string): any {
        return JSON.parse(serialized);
    }
}
