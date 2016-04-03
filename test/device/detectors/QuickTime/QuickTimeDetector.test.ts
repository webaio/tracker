///<reference path="../../../../typings/main.d.ts" />

import { expect } from 'chai';
import { QuickTimeDetector } from '../../../../src/device/detectors/QuickTime/QuickTimeDetector';
import * as Mocks from '../detectors.mock';

describe('QuickTimeDetector', () => {
    it('should properly detect QuickTime plugin by looking for quickTime plugins', (done) => {
        let quickTimeDetector = new QuickTimeDetector(<Navigator><any>Mocks.quickTimeNavigatorValid);

        let detected = quickTimeDetector.isQuickTime();

        expect(detected).to.be.true;

        done();
    });

    it('should properly detect QuickTime plugin by detecting OS', (done) => {
        let quickTimeDetector = new QuickTimeDetector(<Navigator><any>Mocks.quickTimeNavigatorOSValid);

        let detected = quickTimeDetector.isQuickTime();

        expect(detected).to.be.true;

        done();
    });

    it('should not detect QuickTime plugin', (done) => {
        let quickTimeDetector = new QuickTimeDetector(<Navigator><any>Mocks.quickTimeNavigatorInvalid);

        let detected = quickTimeDetector.isQuickTime();

        expect(detected).to.be.false;

        done();
    });
});