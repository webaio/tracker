///<reference path="../../../typings/main.d.ts" />

import { expect } from "chai";
import * as Mocks from "./Detector.mock";
import { DeviceBuilder } from "../../../src/Model/Device/DeviceBuilder";
import { DeviceDetector } from "../../../src/Model/Device/DeviceDetector";
import { Detector } from "../../../src/Model/Device/Detector";
import { Model } from "../../../src/Model/Model";

describe("DeviceBuilder", () => {
    it("builds device", (done) => {
        let model = new Model();
        let detector = new DeviceDetector();
        detector.addDetector(<Detector>Mocks.detector1);
        detector.addDetector(<Detector>Mocks.detector2);

        let deviceBuilder = new DeviceBuilder(detector);
        deviceBuilder.build(model, {});

        expect(model.device.isAdBlock).to.be.true;
        expect(model.device.isCookie).to.be.false;

        done();
    });
});
