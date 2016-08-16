///<reference path="../../typings/main.d.ts" />

import { expect } from "chai";
import * as sinon from "sinon";
import * as Mocks from "./Tracker.mock";
import { Tracker } from "../../src/Tracker/Tracker";
import { EventHandler } from "../../src/Event/Handler/EventHandler";
import { ObjectMerger } from "../../src/Common/ObjectMerger";

describe("Tracker", () => {
    it("runs the tracker flow with previously pushed event to data layer", (done) => {
        let handleSpy = sinon.spy(Mocks.eventHandler, "handle");
        Mocks.global.g("send", {
            event: "pageView"
        });
        let tracker = new Tracker(Mocks.global.g, <EventHandler>Mocks.eventHandler, new ObjectMerger());
        tracker.run();

        expect(handleSpy.calledOnce).to.be.true;
        expect(handleSpy.calledWith({event: "pageView"})).to.be.true;

        handleSpy.restore();

        done();
    });

    it("runs the tracker flow with previously pushed events to data layer", (done) => {
        let handleSpy = sinon.spy(Mocks.eventHandler, "handle");
        Mocks.global.g("set", {
            title: "test"
        });
        Mocks.global.g("send", {
            event: "pageView"
        });
        let tracker = new Tracker(Mocks.global.g, <EventHandler>Mocks.eventHandler, new ObjectMerger());
        tracker.run();

        expect(handleSpy.calledOnce).to.be.true;
        expect(handleSpy.calledWith({event: "pageView", title: "test"})).to.be.true;

        handleSpy.restore();

        done();
    });

    it("runs the tracker flow with two pushed events to data layer", (done) => {
        let handleSpy = sinon.spy(Mocks.eventHandler, "handle");
        Mocks.global.g("send", {
            event: "custom1"
        });
        Mocks.global.g("send", {
            event: "custom2"
        });
        let tracker = new Tracker(Mocks.global.g, <EventHandler>Mocks.eventHandler, new ObjectMerger());
        tracker.run();

        expect(handleSpy.calledTwice).to.be.true;

        handleSpy.restore();

        done();
    });

    it("runs the tracker flow with pushed events to data layer and push after tracker loaded", (done) => {
        let handleSpy = sinon.spy(Mocks.eventHandler, "handle");
        Mocks.global.g("send", {
            event: "pageView"
        });

        let tracker = new Tracker(Mocks.global.g, <EventHandler>Mocks.eventHandler, new ObjectMerger());
        tracker.run();

        expect(handleSpy.calledOnce).to.be.true;

        Mocks.global.g("send", {
            event: "custom2"
        });

        handleSpy.restore();

        done();
    });
});
