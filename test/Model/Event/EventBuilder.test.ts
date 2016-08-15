///<reference path="../../../typings/main.d.ts" />

import { expect } from "chai";
import { Config } from "../../../src/Config/Config";
import { EventBuilder } from "../../../src/Model/Event/EventBuilder";
import { Model } from "../../../src/Model/Model";

describe("EventBuilder", () => {
    it("builds event based on data layer element", (done) => {
        let model = new Model();
        let builder = new EventBuilder(<Config>{
            trackerId: "TRACKER-001"
        });
        builder.build(model, {});

        expect(model.event.trackerId).to.be.equal("TRACKER-001");
        expect(model.event.name).to.be.equal("pageView");

        builder.build(model, {
            event: "custom"
        });

        expect(model.event.name).to.be.equal("custom");

        done();
    });
});
