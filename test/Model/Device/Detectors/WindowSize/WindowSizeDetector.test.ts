///<reference path="../../../../../typings/main.d.ts" />

import { expect } from "chai";
import * as Mocks from "../detectors.mock";
import {WindowSizeDetector} from "../../../../../src/Model/Device/Detectors/WindowSize/WindowSizeDetector";
import {Device} from "../../../../../src/Model/Device/Device";

describe("WindowSizeDetector", () => {
    it("should properly return screens width", (done) => {
        let windowSizeDetector = new WindowSizeDetector(Mocks.windowMock);
        let device = new Device();
        windowSizeDetector.detect(device);

        expect(device.width).to.be.equal(3);
        done();
    });

    it("should properly return screens height", (done) => {
        let windowSizeDetector = new WindowSizeDetector(Mocks.windowMock);
        let device = new Device();
        windowSizeDetector.detect(device);

        expect(device.height).to.be.equal(4);
        done();
    });
});
