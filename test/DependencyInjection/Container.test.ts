///<reference path="../../typings/main.d.ts" />

import { expect } from "chai";
import { Container } from "../../src/DependencyInjection/Container";

describe("Container", () => {
    it("should add service to container", (done) => {
        let container = new Container();
        container.set("test", () => {
           return {};
        });

        expect(container.get("test")).to.be.an("object");
        done();
    });

    it("should throw error when trying to get non existing service", (done) => {
        let container = new Container();

        try {
            container.get("test");
        } catch (e) {
            expect(true).to.be.true;
            done();
        }
    });
});
