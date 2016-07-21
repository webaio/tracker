import { Serializer } from "./Serializer";

export class JsonSerializer implements Serializer {
    public serialize(data: Object): string {
        return JSON.stringify(data);
    }
}
