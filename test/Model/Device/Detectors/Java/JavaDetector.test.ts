///<reference path="../../../../../typings/main.d.ts" />

import { expect } from "chai";
import * as Mocks from "../detectors.mock";
import {JavaDetector} from "../../../../../src/Model/Device/Detectors/Java/JavaDetector";
import {Device} from "../../../../../src/Model/Device/Device";

describe("JavaDetector", () => {
    it("should properly detect java properly", (done) => {
        let javaDetector = new JavaDetector(<Navigator><any>Mocks.javaNavigatorValid);
        let device = new Device();
        javaDetector.detect(device);

        expect(device.isJava).to.be.true;

        done();
    });

    it("should not detect canvas when javaEnabled without property", (done) => {
        let javaDetector = new JavaDetector(<Navigator><any>Mocks.javaNavigatorInalid);
        let device = new Device();
        javaDetector.detect(device);

        expect(device.isJava).to.be.false;

        done();
    });

    it("should not detect canvas when javaEnabled is not function", (done) => {
        let javaDetector = new JavaDetector(<Navigator><any>Mocks.javaNavigatorNotMethod);
        let device = new Device();
        javaDetector.detect(device);

        expect(device.isJava).to.be.false;

        done();
    });
});
