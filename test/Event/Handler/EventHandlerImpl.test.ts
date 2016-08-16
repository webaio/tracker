///<reference path="../../../typings/main.d.ts" />

import { expect } from "chai";
import * as sinon from "sinon";
import { EventHandlerImpl } from "../../../src/Event/Handler/EventHandlerImpl";
import * as Mocks from "./EventHandlerImpl.mock";
import {Sender} from "../../../src/Transport/Sender";
import {ModelBuilder} from "../../../src/Model/ModelBuilder";

describe("EventHandlerImpl", () => {
    it("handles push to data layer", (done) => {
        let sendSpy = sinon.spy(Mocks.sender, "send");
        let buildSpy = sinon.spy(Mocks.modelBuilder, "build");
        let handler = new EventHandlerImpl(<Sender>Mocks.sender, <ModelBuilder>Mocks.modelBuilder);

        handler.handle({
            event: "pageView"
        });

        expect(sendSpy.calledOnce).to.be.true;
        expect(buildSpy.calledOnce).to.be.true;

        sendSpy.restore();
        buildSpy.restore();

        done();
    });
});
