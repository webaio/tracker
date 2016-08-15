///<reference path="../../../typings/main.d.ts" />

import { expect } from "chai";
import * as Mocks from "./Storage.mock";
import * as sinon from "sinon";
import { SessionCookieStorage } from "../../../src/Session/Storage/SessionCookieStorage";
import { SessionCookieSerializer } from "../../../src/Session/Serializer/SessionCookieSerializer";
import { Session } from "../../../src/Session/Session";

describe("SessionCookieStorage", () => {
    it("inserts session object to cookie storage", (done) => {
        let serializeSpy = sinon.spy(Mocks.sessionCookieSerializer, "serialize");
        let serializer = new SessionCookieStorage(
            <Document>Mocks.document,
            <SessionCookieSerializer>Mocks.sessionCookieSerializer
        );

        serializer.insert(Session.createNewSession(new Date()));

        expect(serializeSpy.calledOnce).to.be.true;

        serializeSpy.restore();

        done();
    });

    it("finds session object from cookie storage", (done) => {
        let deserializeSpy = sinon.spy(Mocks.sessionCookieSerializer, "deserialize");
        let serializer = new SessionCookieStorage(
            <Document>Mocks.document,
            <SessionCookieSerializer>Mocks.sessionCookieSerializer
        );

        serializer.find();

        expect(deserializeSpy.calledOnce).to.be.true;

        deserializeSpy.restore();

        done();
    });
});
