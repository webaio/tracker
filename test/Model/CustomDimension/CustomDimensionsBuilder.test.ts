///<reference path="../../../typings/main.d.ts" />

import { expect } from "chai";
import { CustomDimensionsBuilder } from "../../../src/Model/CustomDimension/CustomDimensionsBuilder";
import { Model } from "../../../src/Model/Model";

describe("CustomDimensionsBuilder", () => {
    it("builds custom dimension based on data layer elements", (done) => {
        let builder = new CustomDimensionsBuilder();
        let model = new Model();

        builder.build(model, {
            dimension1: "test1",
            dimension2: "test2",
            dimension101: "test101"
        });

        expect(model.customDimensions).to.have.lengthOf(2);

        done();
    });
});
