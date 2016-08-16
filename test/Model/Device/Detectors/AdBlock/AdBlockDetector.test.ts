///<reference path="../../../../../typings/main.d.ts" />

import { expect } from "chai";
import * as Mocks from "../detectors.mock";
import { AdBlockDetector } from "../../../../../src/Model/Device/Detectors/AdBlock/AdBlockDetector";
import { Device } from "../../../../../src/Model/Device/Device";

describe("LocalStorageDetector", () => {
    it("should properly create bait element by detecting hidden element", (done) => {
        let adBlockDetector = new AdBlockDetector(Mocks.adBlockWindowValid);
        let device = new Device();
        adBlockDetector.detect(device);

        expect(device.isAdBlock).to.be.true;

        done();
    });

    it("should properly create bait element by detecting abp", (done) => {
        let adBlockDetector = new AdBlockDetector(Mocks.adBlockWindowValidAbp);
        let device = new Device();
        adBlockDetector.detect(device);

        expect(device.isAdBlock).to.be.true;
        done();
    });

    it("should not create bait element", (done) => {
        let adBlockDetector = new AdBlockDetector(Mocks.adBlockWindowInvalid);
        let device = new Device();
        adBlockDetector.detect(device);

        expect(device.isAdBlock).to.be.false;
        done();
    });
});
