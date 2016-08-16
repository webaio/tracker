///<reference path="../../typings/main.d.ts" />

import { expect } from "chai";
import { QueryStringSerializer } from "../../src/Serializer/QueryStringSerializer";

describe("QueryStringSerializer", () => {
    it("serializes object", (done) => {
        let serializer = new QueryStringSerializer();
        let result = serializer.serialize({
            test1: "test1",
            test2: "test2",
        });

        expect(result).to.be.equal("test1=test1&test2=test2");

        done();
    });

    it("deserializes object", (done) => {
        let serializer = new QueryStringSerializer();
        let result = serializer.deserialize("");

        expect(result).to.be.equal(undefined);

        done();
    });
});
