///<reference path="../../../../../typings/main.d.ts" />

import { expect } from "chai";
import * as Mocks from "../detectors.mock";
import { CanvasDetector } from "../../../../../src/Model/Device/Detectors/Canvas/CanvasDetector";
import { Device } from "../../../../../src/Model/Device/Device";

describe("CanvasDetector", () => {
    it("should properly detect canvas properly", (done) => {
        let canvasDetector = new CanvasDetector(Mocks.canvasWindowValid);
        let device = new Device();
        canvasDetector.detect(device);

        expect(device.isCanvas).to.be.true;

        done();
    });

    it("should not detect canvas when cannot create canvas HTMLElement", (done) => {
        let canvasDetector = new CanvasDetector(Mocks.canvasWindowInvalid);
        let device = new Device();
        canvasDetector.detect(device);

        expect(device.isCanvas).to.be.false;

        done();
    });
});
