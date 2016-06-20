///<reference path="../../../../typings/main.d.ts" />

import { expect } from 'chai';
import { ScreenSizeDetector } from '../../../../src/device/detectors/ScreenSize/ScreenSizeDetector';
import * as Mocks from '../detectors.mock';
import { Device } from '../../../../src/device/Device';

describe('ScreenSizeDetector', () => {
    it('should properly return screens height', (done) => {
        let device = new Device();
        let screenSizeDetector = new ScreenSizeDetector(Mocks.windowMock);
        screenSizeDetector.detect(device);

        expect(device.availableHeight).to.be.equal(2);
        done();
    });

    it('should properly return screens width', (done) => {
        let device = new Device();
        let screenSizeDetector = new ScreenSizeDetector(Mocks.windowMock);
        screenSizeDetector.detect(device);

        expect(device.availableWidth).to.be.equal(1);
        done();
    });
});
