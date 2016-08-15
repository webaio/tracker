///<reference path="../../../typings/main.d.ts" />

import { expect } from "chai";
import { CustomMetricsBuilder } from "../../../src/Model/CustomMetric/CustomMetricsBuilder";
import { Model } from "../../../src/Model/Model";

describe("CustomMetricsBuilder", () => {
    it("builds custom metrics based on data layer elements", (done) => {
        let builder = new CustomMetricsBuilder();
        let model = new Model();

        builder.build(model, {
            metric1: 100,
            metric2: 200,
            metric101: 1010
        });

        expect(model.customMetrics).to.have.lengthOf(2);

        done();
    });
});
