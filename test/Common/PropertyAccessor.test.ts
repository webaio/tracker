///<reference path="../../typings/main.d.ts" />

import { expect } from "chai";
import { PropertyAccessor } from "../../src/Common/PropertyAccessor";

describe("PropertyAccessor", () => {
    it("should access to object property", (done) => {
        let accessor = new PropertyAccessor();
        expect(accessor.access("test", {test: 1}, 2)).to.equal(1);
        expect(accessor.access("test", {test2: 1}, 2)).to.equal(2);

        done();
    });
});
