///<reference path="../../../../../typings/main.d.ts" />

import { expect } from "chai";
import * as Mocks from "../detectors.mock";
import {TouchDetector} from "../../../../../src/Model/Device/Detectors/Touch/TouchDetector";
import {Device} from "../../../../../src/Model/Device/Device";

describe("TouchDetector", () => {
    it("should properly detect touch screen from window object", (done) => {
        let touchDetector = new TouchDetector(Mocks.touchWindowValid, <Navigator><any>Mocks.touchNavigatorValid);
        let device = new Device();
        touchDetector.detect(device);

        expect(device.isTouch).to.be.true;

        done();
    });

    it("should detect touch screen by checking navigator", (done) => {
        let touchDetector = new TouchDetector(Mocks.touchWindowInvalid, <Navigator><any>Mocks.touchNavigatorValid);
        let device = new Device();
        touchDetector.detect(device);

        expect(device.isTouch).to.be.true;

        done();
    });

    it("shouldn\"t detect touch screen", (done) => {
        let touchDetector = new TouchDetector(Mocks.touchWindowInvalid, <Navigator><any>Mocks.touchNavigatorInvalid);
        let device = new Device();
        touchDetector.detect(device);

        expect(device.isTouch).to.be.false;

        done();
    });
});
