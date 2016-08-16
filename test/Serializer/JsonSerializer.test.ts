///<reference path="../../typings/main.d.ts" />

import { expect } from "chai";
import { JsonSerializer } from "../../src/Serializer/JsonSerializer";

describe("JsonSerializer", () => {
    it("serializes object", (done) => {
        let serializer = new JsonSerializer();
        let result = serializer.serialize({
            test1: "test1",
            test2: "test2",
        });

        expect(result).to.be.equal("{\"test1\":\"test1\",\"test2\":\"test2\"}");

        done();
    });

    it("deserializes object", (done) => {
        let serializer = new JsonSerializer();
        let result = serializer.deserialize("{\"test1\":\"test1\",\"test2\":\"test2\"}");

        expect(result).have.property("test1");
        expect(result).have.property("test2");

        done();
    });
});
