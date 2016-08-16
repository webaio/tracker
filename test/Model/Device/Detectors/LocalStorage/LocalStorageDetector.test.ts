///<reference path="../../../../../typings/main.d.ts" />

import { expect } from "chai";
import * as Mocks from "../detectors.mock";
import {LocalStorageDetector} from "../../../../../src/Model/Device/Detectors/LocalStorage/LocalStorageDetector";
import {Device} from "../../../../../src/Model/Device/Device";

describe("LocalStorageDetector", () => {
    it("should properly detect localStorage existance", (done) => {
        let localStorageDetector = new LocalStorageDetector(<any>Mocks.storageProper);
        let device = new Device();
        localStorageDetector.detect(device);

        expect(device.isLocalStorage).to.be.equal(true);

        done();
    });

    it("should properly detect localStorage missing", (done) => {
        let localStorageDetector = new LocalStorageDetector(<any>{});
        let device = new Device();
        localStorageDetector.detect(device);

        expect(device.isLocalStorage).to.be.equal(false);

        done();
    });

    it("should properly detect localStorage missing when undefined", (done) => {
        let localStorageDetector = new LocalStorageDetector(undefined);
        let device = new Device();
        localStorageDetector.detect(device);

        expect(device.isLocalStorage).to.be.equal(false);

        done();
    });
});
