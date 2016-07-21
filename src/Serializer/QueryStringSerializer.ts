import { Serializer } from "./Serializer";

export class QueryStringSerializer implements Serializer {
    serialize(data: Object): string {
        let str = [];

        for (let item in data) {
            if (data.hasOwnProperty(item)) {
                str.push(encodeURIComponent(item) + "=" + encodeURIComponent(data[item]));
            }
        }

        return str.join("&");
    }
}
