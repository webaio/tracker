///<reference path="../../typings/main.d.ts" />

import { expect } from "chai";
import { UrlDecoder } from "../../src/Common/UrlDecoder";

describe("UrlDecoder", () => {
    it("should get domain from url", (done) => {
        let urlDecoder = new UrlDecoder();

        expect(urlDecoder.getDomain("https://google.com/test1")).to.equal("//google.com");

        done();
    });

    it("should get params from url", (done) => {
        let urlDecoder = new UrlDecoder();

        expect(urlDecoder.getParams("https://google.com/tracker.js?g=1&t=2").g).to.equal("1");
        expect(urlDecoder.getParams("https://google.com/tracker.js")).to.be.an("object");

        done();
    });
});
