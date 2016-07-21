import { Transport } from "./Transport";
import { Config } from "../Config/Config";

export class XhrTransport implements Transport {
    constructor(private config: Config) {}

    send(data: Object) {
        let request = new XMLHttpRequest();
        request.open("POST", this.config.domain, true);
        request.setRequestHeader("Content-Type", "application/json");
        request.send(data);
    }
}
