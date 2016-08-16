///<reference path="../../../typings/main.d.ts" />

import { expect } from "chai";
import * as Mocks from "./VisitorBuilder.mock";
import { SessionManager } from "../../../src/Session/SessionManager";
import { VisitorBuilder } from "../../../src/Model/Visitor/VistitorBuilder";
import { Model } from "../../../src/Model/Model";

describe("VisitorBuilder", () => {
    it("builds visitor based on sesion", (done) => {
        let model = new Model();
        let visitorBuilder = new VisitorBuilder(<SessionManager>Mocks.sessionManager);
        visitorBuilder.build(model, {});

        expect(model.visitor).to.have.property("visitorId");
        expect(model.visitor).to.have.property("sessionId");
        expect(model.visitor).to.have.property("firstVisitAt");
        expect(model.visitor).to.have.property("currentVisitAt");
        expect(model.visitor).to.have.property("sessionStartedAt");
        expect(model.visitor).to.have.property("sessionEndedAt");

        done();
    });
});
