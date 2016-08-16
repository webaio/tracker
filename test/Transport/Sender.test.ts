///<reference path="../../typings/main.d.ts" />

import { expect } from "chai";
import * as Mocks from "./Transport.mock";
import * as sinon from "sinon";
import { TransportFactory } from "../../src/Transport/TransportFactory";
import { Transports } from "../../src/Transport/Transports";
import { Sender } from "../../src/Transport/Sender";
import { SerializerFactory } from "../../src/Serializer/SerializerFactory";
import { ModelNormalizer } from "../../src/Normalizer/ModelNormalizer";
import { Model } from "../../src/Model/Model";

describe("Sender", () => {
    it("sends the request", (done) => {
        let createSpy = sinon.spy(Mocks.transportFactory, "create");
        let createFromTransportSpy = sinon.spy(Mocks.serializerFactory, "createFromTransport");
        let normalizeSpy = sinon.spy(Mocks.modelNormalizer, "normalize");
        let sender = new Sender(
            <TransportFactory>Mocks.transportFactory,
            <SerializerFactory>Mocks.serializerFactory,
            <ModelNormalizer>Mocks.modelNormalizer
        );
        
        sender.send(Transports.PIXEL_TRANSPORT, new Model());

        expect(createSpy.calledOnce).to.be.true;
        expect(createFromTransportSpy.calledOnce).to.be.true;
        expect(normalizeSpy.calledOnce).to.be.true;

        createSpy.restore();
        createFromTransportSpy.restore();
        normalizeSpy.restore();

        done();
    });    
});
