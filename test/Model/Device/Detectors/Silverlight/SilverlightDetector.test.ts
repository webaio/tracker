///<reference path="../../../../../typings/main.d.ts" />

import { expect } from "chai";
import * as Mocks from "../detectors.mock";
import { SilverlightDetector } from "../../../../../src/Model/Device/Detectors/Silverlight/SilverlightDetector";
import { Device } from "../../../../../src/Model/Device/Device";

describe("SilverlightDetector", () => {
    it("should properly detect SilverLight plugin by creating ActiveXObject", (done) => {
        let silverlightDetector = new SilverlightDetector(
            <Window><any>Mocks.silverlightWindowValid,
            <Navigator><any>Mocks.silverlightNavigatorValid
        );
        let device = new Device();
        silverlightDetector.detect(device);

        expect(device.isSilverlight).to.be.true;

        done();
    });

    it("should properly detect Silverlight plugin by looking for pdf plugins", (done) => {
        let silverlightDetector = new SilverlightDetector(
            <Window><any>Mocks.silverlightWindowValid,
            <Navigator><any>Mocks.silverlightNavigatorValid
        );
        let device = new Device();
        silverlightDetector.detect(device);

        expect(device.isSilverlight).to.be.true;

        done();
    });

    it("should not detect Silverlight plugin when no plugins", (done) => {
        let silverlightDetector = new SilverlightDetector(
            <Window><any>Mocks.silverlightWindowInvalid,
            <Navigator><any>Mocks.silverlightNavigatorInvalid
        );
        let device = new Device();
        silverlightDetector.detect(device);

        expect(device.isSilverlight).to.be.false;

        done();
    });

    it("should not detect Silverlight plugin when no ActiveXObject", (done) => {
        let silverlightDetector = new SilverlightDetector(
            <Window><any>Mocks.silverlightWindowInvalid,
            <Navigator><any>Mocks.silverlightNavigatorValidNoSL
        );
        let device = new Device();
        silverlightDetector.detect(device);

        expect(device.isSilverlight).to.be.false;

        done();
    });
});
