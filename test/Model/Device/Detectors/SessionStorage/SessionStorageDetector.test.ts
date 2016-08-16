///<reference path="../../../../../typings/main.d.ts" />

import { expect } from "chai";
import * as Mocks from "../detectors.mock";
import {SessionStorageDetector} from "../../../../../src/Model/Device/Detectors/SessionStorage/SessionStorageDetector";
import {Device} from "../../../../../src/Model/Device/Device";

describe("SessionStorageDetector", () => {
    it("should properly detect localStorage existance", (done) => {
        let sessionStorageDetector = new SessionStorageDetector(<any>Mocks.storageProper);
        let device = new Device();
        sessionStorageDetector.detect(device);

        expect(device.isSessionStorage).to.be.equal(true);
        done();
    });

    it("should properly detect localStorage missing", (done) => {
        let sessionStorageDetector = new SessionStorageDetector(<any>{});
        let device = new Device();
        sessionStorageDetector.detect(device);

        expect(device.isSessionStorage).to.be.equal(false);
        done();
    });

    it("should properly detect localStorage missing when undefined", (done) => {
        let sessionStorageDetector = new SessionStorageDetector(undefined);
        let device = new Device();
        sessionStorageDetector.detect(device);

        expect(device.isSessionStorage).to.be.equal(false);
        done();
    });
});
