///<reference path="../../typings/main.d.ts" />

import { expect } from "chai";
import * as Mocks from "./ModelBuilder.mock";
import { ModelBuilder } from "../../src/Model/ModelBuilder";
import { Builder } from "../../src/Model/Builder";
import { Model } from "../../src/Model/Model";

describe("ModelBuilder", () => {
    it("builds final model based on injected builders", (done) => {
        let modelBuilder = new ModelBuilder();
        let model = new Model();
        modelBuilder.addBuilder(<Builder>Mocks.builder);
        modelBuilder.build(model, {});

        expect(model.content).to.be.equal("test");
        done();
    });
});
