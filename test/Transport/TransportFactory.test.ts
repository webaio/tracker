///<reference path="../../typings/main.d.ts" />

import { expect } from "chai";
import * as Mocks from "./Transport.mock";
import { BeaconTransport } from "../../src/Transport/BeaconTransport";
import { TransportFactory } from "../../src/Transport/TransportFactory";
import { XhrTransport } from "../../src/Transport/XhrTransport";
import { PixelTransport } from "../../src/Transport/PixelTransport";
import { Transports } from "../../src/Transport/Transports";

describe("TransportFactory", () => {
    it("creates transport service", (done) => {
        let factory = new TransportFactory(
            <XhrTransport>Mocks.xhrTransport,
            <PixelTransport>Mocks.pixelTransport,
            <BeaconTransport>Mocks.beaconTransport
        );
        let result1 = factory.create(Transports.XHR_TRANSPORT);
        let result2 = factory.create(Transports.BEACON_TRANSPORT);
        let result3 = factory.create(Transports.PIXEL_TRANSPORT);
        let result4 = factory.create(4);

        expect(result1).to.be.a("object");
        expect(result2).to.be.a("object");
        expect(result3).to.be.a("object");
        expect(result4).to.be.a("object");

        done();
    });    
});
