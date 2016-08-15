///<reference path="../../../../../typings/main.d.ts" />

import { expect } from "chai";
import * as Mocks from "../detectors.mock";
import { Device } from "../../../../../src/Model/Device/Device";
import { ColorsDetector } from "../../../../../src/Model/Device/Detectors/Colors/ColorsDetector";

describe("ColorsDetector", () => {
    it("detects colors depth on page", () => {
        let colorsDetector = new ColorsDetector(<Screen>Mocks.screenColors);
        let device = new Device();
        colorsDetector.detect(device);

        expect(device.colors).to.be.equal(24);
    });
});
