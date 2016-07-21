///<reference path="../../../../../typings/main.d.ts" />

import { expect } from "chai";
import * as Mocks from "../detectors.mock";
import {ScreenSizeDetector} from "../../../../../src/Model/Device/Detectors/ScreenSize/ScreenSizeDetector";
import {Device} from "../../../../../src/Model/Device/Device";

describe("ScreenSizeDetector", () => {
    it("should properly return screens height", (done) => {
        let device = new Device();
        let screenSizeDetector = new ScreenSizeDetector(Mocks.windowMock);
        screenSizeDetector.detect(device);

        expect(device.availableHeight).to.be.equal(2);
        done();
    });

    it("should properly return screens width", (done) => {
        let device = new Device();
        let screenSizeDetector = new ScreenSizeDetector(Mocks.windowMock);
        screenSizeDetector.detect(device);

        expect(device.availableWidth).to.be.equal(1);
        done();
    });
});
