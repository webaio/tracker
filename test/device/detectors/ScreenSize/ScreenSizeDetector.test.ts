///<reference path="../../../../typings/main.d.ts" />

import { expect } from 'chai';
import { ScreenSizeDetector } from '../../../../src/device/detectors/ScreenSize/ScreenSizeDetector';
import * as Mocks from '../detectors.mock';

describe('ScreenSizeDetector', () => {
    it('should properly return screens available width', (done) => {
        let screenSizeDetector = new ScreenSizeDetector(<any>Mocks.windowMock);

        expect(screenSizeDetector.getAvailableWidth()).to.be.equal(1);
        done();
    });

    it('should properly return screens available height', (done) => {
        let screenSizeDetector = new ScreenSizeDetector(<any>Mocks.windowMock);

        expect(screenSizeDetector.getAvailableHeight()).to.be.equal(2);
        done();
    });
});