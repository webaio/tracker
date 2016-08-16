///<reference path="../../../../../typings/main.d.ts" />

import { expect } from "chai";
import * as Mocks from "../detectors.mock";
import { Device } from "../../../../../src/Model/Device/Device";
import { LanguageDetector } from "../../../../../src/Model/Device/Detectors/Language/LanguageDetector";

describe("LanguageDetector", () => {
    it("detects language on page", () => {
        let languageDetector = new LanguageDetector(<Navigator>Mocks.languageNavigator);
        let device = new Device();
        languageDetector.detect(device);

        expect(device.language).to.be.equal("en");
    });
});
