///<reference path="../../typings/main.d.ts" />

import * as Mocks from "./Transport.mock";
import { PixelTransport } from "../../src/Transport/PixelTransport";
import { Config } from "../../src/Config/Config";

describe("PixelTransport", () => {
    it("sends request", (done) => {
        let transport = new PixelTransport(<Config>Mocks.config);
        transport.send({
            test: "test"
        });

        done();
    });    
});
