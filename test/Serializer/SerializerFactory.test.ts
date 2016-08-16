///<reference path="../../typings/main.d.ts" />

import { expect } from "chai";
import { SerializerFactory } from "../../src/Serializer/SerializerFactory";
import { Transports } from "../../src/Transport/Transports";

describe("SerializerFactory", () => {
    it("creates serializer service based on transport type", (done) => {
        let serializerFactory = new SerializerFactory();
        let result1 = serializerFactory.createFromTransport(Transports.BEACON_TRANSPORT);
        let result2 = serializerFactory.createFromTransport(Transports.PIXEL_TRANSPORT);
        let result3 = serializerFactory.createFromTransport(Transports.XHR_TRANSPORT);

        expect(result1).to.be.a("object");
        expect(result2).to.be.a("object");
        expect(result3).to.be.a("object");

        done();
    });
});
