///<reference path="../../../typings/main.d.ts" />

import { expect } from "chai";
import * as Mocks from "./ContentBuilder.mock";
import { Model } from "../../../src/Model/Model";
import { ContentBuilder } from "../../../src/Model/Content/ContentBuilder";
import { PropertyAccessor } from "../../../src/Common/PropertyAccessor";

describe("ContentBuilder", () => {
    it("builds content based on data layer elements", (done) => {
        let model = new Model();
        let contentBuilder = new ContentBuilder(<Document>Mocks.document, new PropertyAccessor());
        contentBuilder.build(model, {
            host: "example.com",
            path: "/test1/test2"
        });

        expect(model.content.host).to.be.equal("example.com");
        expect(model.content.location).to.be.equal("localhost");
        expect(model.content.path).to.be.equal("/test1/test2");
        expect(model.content.title).to.be.equal("Test title");

        done();
    });
});
