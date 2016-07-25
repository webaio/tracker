import { Serializer } from "./Serializer";

export class QueryStringSerializer implements Serializer {
    public serialize(data: Object): string {
        let str = [];

        for (let item in data) {
            if (data.hasOwnProperty(item) && encodeURIComponent(data[item])) {
                str.push(encodeURIComponent(item) + "=" + encodeURIComponent(data[item]));
            }
        }

        return str.join("&");
    }

    public deserialize(serialized: string): Object {
        return undefined;
    }
}
