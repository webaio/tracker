///<reference path="../../typings/main.d.ts" />

import { expect } from "chai";
import * as sinon from "sinon";
import * as Mocks from "./Transport.mock";
import { BeaconTransport } from "../../src/Transport/BeaconTransport";
import { Config } from "../../src/Config/Config";

describe("BeaconTransport", () => {
    it("sends request", (done) => {
        let sendBeaconSpy = sinon.spy(Mocks.navigator, "sendBeacon");
        let transport = new BeaconTransport(Mocks.navigator, <Config>Mocks.config);
        transport.send({
            test: "test"
        });

        expect(sendBeaconSpy.calledOnce).to.be.true;

        done();
    });    
});
