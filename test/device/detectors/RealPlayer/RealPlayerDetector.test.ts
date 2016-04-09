///<reference path="../../../../typings/main.d.ts" />

import { expect } from 'chai';
import { RealPlayerDetector } from '../../../../src/device/detectors/RealPlayer/RealPlayerDetector';
import * as Mocks from '../detectors.mock';

describe('RealPlayerDetector', () => {
    it('should properly detect pdf plugin by creating ActiveXObject', (done) => {
        let pdfDetector = new RealPlayerDetector(Mocks.realPlayerfWindowValid, <Navigator><any>Mocks.realPlayerNavigatorValid);

        let detected = pdfDetector.isRealPlayer();

        expect(detected).to.be.true;

        done();
    });

    it('should properly detect pdf plugin by looking for pdf plugins', (done) => {
        let realPlayerDetector = new RealPlayerDetector(Mocks.realPlayerfWindowInalid, <Navigator><any>Mocks.realPlayerNavigatorValid);

        let detected = realPlayerDetector.isRealPlayer();

        expect(detected).to.be.true;

        done();
    });

    it('should not detect pdf plugin', (done) => {
        let realPlayerDetector = new RealPlayerDetector(Mocks.realPlayerfWindowInalid, <Navigator><any>Mocks.realPlayerNavigatorInvalid);

        let detected = realPlayerDetector.isRealPlayer();

        expect(detected).to.be.false;

        done();
    });
});