///<reference path="../../../../../typings/main.d.ts" />

import { expect } from "chai";
import * as Mocks from "../detectors.mock";
import {QuickTimeDetector} from "../../../../../src/Model/Device/Detectors/QuickTime/QuickTimeDetector";
import {Device} from "../../../../../src/Model/Device/Device";

describe("QuickTimeDetector", () => {
    it("should properly detect QuickTime plugin by looking for quickTime plugins", (done) => {
        let quickTimeDetector = new QuickTimeDetector(<Navigator><any>Mocks.quickTimeNavigatorValid);
        let device = new Device();
        quickTimeDetector.detect(device);

        expect(device.isQuickTime).to.be.true;

        done();
    });

    it("should properly detect QuickTime plugin by detecting OS", (done) => {
        let quickTimeDetector = new QuickTimeDetector(<Navigator><any>Mocks.quickTimeNavigatorOSValid);
        let device = new Device();
        quickTimeDetector.detect(device);

        expect(device.isQuickTime).to.be.true;

        done();
    });

    it("should not detect QuickTime plugin", (done) => {
        let quickTimeDetector = new QuickTimeDetector(<Navigator><any>Mocks.quickTimeNavigatorInvalid);
        let device = new Device();
        quickTimeDetector.detect(device);

        expect(device.isQuickTime).to.be.false;

        done();
    });
});
