///<reference path="../../typings/main.d.ts" />

import { expect } from "chai";
import { Uuid } from "../../src/Common/Uuid";

describe("Uuid", () => {
    it("should generate uuid", (done) => {
        let uuid = Uuid.generate();

        expect(uuid.length).to.equal(36);
        done();
    });
});
