///<reference path="../../../typings/main.d.ts" />

import { expect } from "chai";
import * as Mocks from "./Serializer.mock";
import { VisitorCookieSerializer } from "../../../src/Session/Serializer/VisitorCookieSerializer";
import { Config } from "../../../src/Config/Config";
import { Visitor } from "../../../src/Session/Visitor";

describe("VisitorCookieSerializer", () => {
    it("serializes visitor to store this in cookie", (done) => {
        let serializer = new VisitorCookieSerializer(<Document>Mocks.visitorDocument, <Config>Mocks.config);
        let result = serializer.serialize(
            Visitor.getCurrentVisitor("ac1a112e-16cd-4eae-8cdf-df33a122d131", 145160640000, 145340640000)
        );

        expect(result)
            .to
            .be
            .equal("_w_visitor=ac1a112e-16cd-4eae-8cdf-df33a122d131.145160640000.145340640000;max-age=31104000");

        done();
    });

    it("deserializes visitor from cookie", (done) => {
        let serializer = new VisitorCookieSerializer(<Document>Mocks.visitorDocument, <Config>Mocks.config);
        let result = serializer.deserialize();

        expect(result).to.be.a("object");
        expect(result.visitorId).to.be.equal("ac1a112e-16cd-4eae-8cdf-df33a122d131");
        expect(result.firstVisitAt.getTime()).to.be.equal(145160640000);
        expect(result.lastVisitAt.getTime()).to.be.equal(145340640000);

        done();
    });

    it("returns null while cookie is empty", (done) => {
        let serializer = new VisitorCookieSerializer(<Document>Mocks.documentWithEmptyCookie, <Config>Mocks.config);
        let result = serializer.deserialize();

        expect(result).to.be.equal(null);

        done();
    });
});
