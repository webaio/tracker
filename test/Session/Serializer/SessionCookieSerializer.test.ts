///<reference path="../../../typings/main.d.ts" />

import { expect } from "chai";
import * as Mocks from "./Serializer.mock";
import { SessionCookieSerializer } from "../../../src/Session/Serializer/SessionCookieSerializer";
import { Config } from "../../../src/Config/Config";
import { Session } from "../../../src/Session/Session";

describe("SessionCookieSerializer", () => {
    it("serializes session to store this in cookie", (done) => {
        let serializer = new SessionCookieSerializer(<Document>Mocks.sessionDocument, <Config>Mocks.config);
        let result = serializer.serialize(
            Session.getExistingSession("ac1a112e-16cd-4eae-8cdf-df33a122d131", 145160640000, 145340640000)
        );

        expect(result)
            .to
            .be
            .equal("_w_session=ac1a112e-16cd-4eae-8cdf-df33a122d131.145160640000.145340640000;max-age=1800");

        done();
    });

    it("deserializes session from cookie", (done) => {
        let serializer = new SessionCookieSerializer(<Document>Mocks.sessionDocument, <Config>Mocks.config);
        let result = serializer.deserialize();

        expect(result).to.be.a("object");
        expect(result.sessionId).to.be.equal("ac1a112e-16cd-4eae-8cdf-df33a122d131");
        expect(result.sessionStartedAt.getTime()).to.be.equal(145160640000);
        expect(result.sessionEndedAt.getTime()).to.be.equal(145340640000);

        done();
    });

    it("returns null while cookie is empty", (done) => {
        let serializer = new SessionCookieSerializer(<Document>Mocks.documentWithEmptyCookie, <Config>Mocks.config);
        let result = serializer.deserialize();

        expect(result).to.be.equal(null);

        done();
    });
});
