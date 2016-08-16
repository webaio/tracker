import { Serializer } from "./Serializer";

export class QueryStringSerializer implements Serializer {
    public serialize(data: any): string {
        let parameters: Array<any> = [];

        for (let item in data) {
            if (data.hasOwnProperty(item) && encodeURIComponent(data[item])) {
                parameters.push(encodeURIComponent(item) + "=" + encodeURIComponent(data[item]));
            }
        }

        return parameters.join("&");
    }

    public deserialize(serialized: string): any {
        return undefined;
    }
}
