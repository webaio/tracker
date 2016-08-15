///<reference path="../../typings/main.d.ts" />

import * as Mocks from "./Transport.mock";
import { XhrTransport } from "../../src/Transport/XhrTransport";
import { Config } from "../../src/Config/Config";

describe("XhrTransport", () => {
    it("sends request", (done) => {
        let transport = new XhrTransport(<Config>Mocks.config);
        transport.send({
            test: "test"
        });

        done();
    });    
});
