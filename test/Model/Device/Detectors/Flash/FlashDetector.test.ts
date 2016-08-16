///<reference path="../../../../../typings/main.d.ts" />

import { expect } from "chai";
import * as Mocks from "../detectors.mock";
import {Device} from "../../../../../src/Model/Device/Device";
import {FlashDetector} from "../../../../../src/Model/Device/Detectors/Flash/FlashDetector";

describe("FlashDetector", () => {
    it("should properly detect flash plugin by looking for Shockwave plugin", (done) => {
        let flashDetector = new FlashDetector(<Window><any>Mocks.flashWindowInvalid, <Navigator><any>Mocks.flashNavigatorValid);
        let device = new Device();
        flashDetector.detect(device);

        expect(device.isFlash).to.be.true;

        done();
    });

    it("should properly detect flash plugin by creating ActiveXObject", (done) => {
        let flashDetector = new FlashDetector(<Window><any>Mocks.flashWindowValid, <Navigator><any>Mocks.flashNavigatorInvalid);
        let device = new Device();
        flashDetector.detect(device);

        expect(device.isFlash).to.be.true;

        done();
    });

    it("should not detect flash plugin by looking for plugins", (done) => {
        let flashDetector = new FlashDetector(<Window><any>Mocks.flashWindowValid, <Navigator><any>Mocks.flashNavigatorValidNoFlash);
        let device = new Device();
        flashDetector.detect(device);

        expect(device.isFlash).to.be.false;

        done();
    });

    it("should not detect flash plugin when cannot create ActiveXObejct", (done) => {
        let flashDetector = new FlashDetector(<Window><any>Mocks.flashWindowInvalid, <Navigator><any>Mocks.flashNavigatorInvalid);
        let device = new Device();
        flashDetector.detect(device);

        expect(device.isFlash).to.be.false;

        done();
    });
});
