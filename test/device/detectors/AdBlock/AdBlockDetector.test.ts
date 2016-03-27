///<reference path="../../../../typings/main.d.ts" />

import { expect } from 'chai';
import { AdBlockDetector } from '../../../../src/device/detectors/AdBlock/AdBlockDetector';
import * as Mocks from '../detectors.mock';

describe('LocalStorageDetector', () => {
    it('should properly create bait element by detecting hidden element', (done) => {
        let adBlockDetector = new AdBlockDetector(Mocks.adBlockWindowValid);

        let detected = adBlockDetector.isAdBlock();

        expect(detected).to.be.true;

        done();
    });

    it('should properly create bait element by detecting abp', (done) => {
        let adBlockDetector = new AdBlockDetector(Mocks.adBlockWindowValidAbp);

        let detected = adBlockDetector.isAdBlock();

        expect(detected).to.be.true;
        done();
    });

    it('should not create bait element', (done) => {
        let adBlockDetector = new AdBlockDetector(Mocks.adBlockWindowInvalid);

        let detected = adBlockDetector.isAdBlock();

        expect(detected).to.be.false;
        done();
    });
});