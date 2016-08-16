///<reference path="../../../typings/main.d.ts" />

import { expect } from "chai";
import * as Mocks from "./Storage.mock";
import * as sinon from "sinon";
import { VisitorCookieStorage } from "../../../src/Session/Storage/VisitorCookieStorage";
import { VisitorCookieSerializer } from "../../../src/Session/Serializer/VisitorCookieSerializer";
import { Visitor } from "../../../src/Session/Visitor";

describe("VisitorCookieStorage", () => {
    it("inserts visitor object to cookie storage", (done) => {
        let serializeSpy = sinon.spy(Mocks.visitorCookieSerializer, "serialize");
        let serializer = new VisitorCookieStorage(
            <Document>Mocks.document,
            <VisitorCookieSerializer>Mocks.visitorCookieSerializer
        );

        serializer.insert(Visitor.createNewVisitor(new Date()));

        expect(serializeSpy.calledOnce).to.be.true;

        serializeSpy.restore();

        done();
    });

    it("finds visitor object from cookie storage", (done) => {
        let deserializeSpy = sinon.spy(Mocks.visitorCookieSerializer, "deserialize");
        let serializer = new VisitorCookieStorage(
            <Document>Mocks.document,
            <VisitorCookieSerializer>Mocks.visitorCookieSerializer
        );

        serializer.find();

        expect(deserializeSpy.calledOnce).to.be.true;

        deserializeSpy.restore();

        done();
    });
});
