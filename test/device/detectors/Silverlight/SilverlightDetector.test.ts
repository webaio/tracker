///<reference path="../../../../typings/main.d.ts" />

import { expect } from 'chai';
import { SilverlightDetector } from '../../../../src/device/detectors/Silverlight/SilverlightDetector';
import * as Mocks from '../detectors.mock';

describe('SilverlightDetector', () => {
    it('should properly detect SilverLight plugin by creating ActiveXObject', (done) => {
        let silverlightDetector = new SilverlightDetector(
            <Window><any>Mocks.silverlightWindowValid,
            <Navigator><any>Mocks.silverlightNavigatorValid
        );

        let detected = silverlightDetector.isSilverlight();

        expect(detected).to.be.true;

        done();
    });

    it('should properly detect Silverlight plugin by looking for pdf plugins', (done) => {
        let silverlightDetector = new SilverlightDetector(
            <Window><any>Mocks.silverlightWindowValid,
            <Navigator><any>Mocks.silverlightNavigatorValidNoSL
        );

        let detected = silverlightDetector.isSilverlight();

        expect(detected).to.be.true;

        done();
    });

    it('should not detect Silverlight plugin when no plugins', (done) => {
        let silverlightDetector = new SilverlightDetector(
            <Window><any>Mocks.silverlightWindowInvalid,
            <Navigator><any>Mocks.silverlightNavigatorInvalid
        );

        let detected = silverlightDetector.isSilverlight();

        expect(detected).to.be.false;

        done();
    });

    it('should not detect Silverlight plugin when no ActiveXObject', (done) => {
        let silverlightDetector = new SilverlightDetector(
            <Window><any>Mocks.silverlightWindowInvalid,
            <Navigator><any>Mocks.silverlightNavigatorValidNoSL
        );

        let detected = silverlightDetector.isSilverlight();

        expect(detected).to.be.false;

        done();
    });
});