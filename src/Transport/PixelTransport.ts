import { Transport } from "./Transport";
import { Config } from "../Config/Config";

export class PixelTransport implements Transport {
    constructor(private config: Config) {}

    send(data: Object) {
        let image = new Image();
        image.src = this.config.domain + "/?" + data;
    }
}
