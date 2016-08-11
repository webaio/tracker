import { Transport } from "./Transport";
import { Config } from "../Config/Config";

export class BeaconTransport implements Transport {
    constructor(private navigator: any, private config: Config) {}

    send(data: any) {
        if (typeof this.navigator.sendBeacon === "function") {
            this.navigator.sendBeacon(this.config.domain, data);
        }
    }
}
