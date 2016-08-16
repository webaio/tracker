///<reference path="../../typings/main.d.ts" />

import { expect } from "chai";
import { ObjectMerger } from "../../src/Common/ObjectMerger";

describe("ObjectMerger", () => {
    it("merges two objects into one", (done) => {
        let objectMerger = new ObjectMerger();
        let result = objectMerger.merge({
            test1: "test1"
        }, {
            test2: "test2",
            test3: {
                test4: "test4"
            }
        });

        expect(result).to.have.deep.property("test1");
        expect(result).to.have.deep.property("test2");
        expect(result).to.have.deep.property("test3.test4");

        done();
    });
});
