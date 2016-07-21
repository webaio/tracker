///<reference path="../../../../../typings/main.d.ts" />

import { expect } from "chai";
import * as Mocks from "../detectors.mock";
import {PdfDetector} from "../../../../../src/Model/Device/Detectors/Pdf/PdfDetector";
import {Device} from "../../../../../src/Model/Device/Device";

describe("PdfDetector", () => {
    it("should properly detect pdf plugin by creating ActiveXObject", (done) => {
        let pdfDetector = new PdfDetector(<Window><any>Mocks.pdfWindowValid, <Navigator><any>Mocks.pdfNavigatorValid);
        let device = new Device();
        pdfDetector.detect(device);

        expect(device.isPdf).to.be.true;

        done();
    });

    it("should properly detect pdf plugin by looking for pdf plugins", (done) => {
        let pdfDetector = new PdfDetector(<Window><any>Mocks.pdfWindowInvalid, <Navigator><any>Mocks.pdfNavigatorValid);
        let device = new Device();
        pdfDetector.detect(device);

        expect(device.isPdf).to.be.true;

        done();
    });

    it("should not detect pdf plugin", (done) => {
        let pdfDetector = new PdfDetector(<Window><any>Mocks.pdfWindowInvalid, <Navigator><any>Mocks.pdfNavigatorInvalid);
        let device = new Device();
        pdfDetector.detect(device);

        expect(device.isPdf).to.be.false;

        done();
    });
});
