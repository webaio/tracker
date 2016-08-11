///<reference path="../../typings/main.d.ts" />

import { expect } from "chai";
import * as Mocks from "./ConfigReader.mock";
import { ConfigReader } from "../../src/Config/ConfigReader";
import { UrlDecoder } from "../../src/Common/UrlDecoder";

describe("ConfigReader", () => {
    it("should read parameter from HTML element", (done) => {
        let configReader = new ConfigReader(<UrlDecoder>Mocks.urlDecoder);
        let config = configReader.read(<HTMLScriptElement>Mocks.htmlElement);

        expect(config.domain).to.equal("//localhost");
        expect(config.trackerId).to.equal("WEBA-001");
        expect(config.globalFunctionName).to.equal("weba");
        expect(config.sessionCookieName).to.equal("_w_session");
        expect(config.visitorCookieName).to.equal("_w_visitor");
        expect(config.sessionLifetimeInSeconds).to.equal(1800);
        expect(config.visitorLifetimeInSeconds).to.equal(31104000);
        done();
    });
});
