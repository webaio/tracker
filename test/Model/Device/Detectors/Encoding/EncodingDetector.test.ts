///<reference path="../../../../../typings/main.d.ts" />

import { expect } from "chai";
import * as Mocks from "../detectors.mock";
import { EncodingDetector } from "../../../../../src/Model/Device/Detectors/Encoding/EncodingDetector";
import { Device } from "../../../../../src/Model/Device/Device";

describe("EncodingDetector", () => {
    it("detects encoding on page", () => {
        let encodingDetector = new EncodingDetector(<Document>Mocks.encodingDocument);
        let device = new Device();
        encodingDetector.detect(device);

        expect(device.encoding.toLocaleLowerCase()).to.be.equal("utf-8");
    });
});
