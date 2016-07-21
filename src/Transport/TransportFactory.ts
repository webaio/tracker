import { Transports } from "./Transports";
import { XhrTransport } from "./XhrTransport";
import { BeaconTransport } from "./BeaconTransport";
import { PixelTransport } from "./PixelTransport";
import { Transport } from "./Transport";

export class TransportFactory {
    constructor(
        private xhrTransport: XhrTransport,
        private pixelTransport: PixelTransport,
        private beaconTransport: BeaconTransport
    ) {}

    public create(transportType: Transports): Transport {
        switch (transportType) {
            case Transports.XHR_TRANSPORT: return this.xhrTransport;
            case Transports.BEACON_TRANSPORT: return this.beaconTransport;
            case Transports.PIXEL_TRANSPORT: return this.pixelTransport;
            default: return this.pixelTransport;
        }
    }
}
