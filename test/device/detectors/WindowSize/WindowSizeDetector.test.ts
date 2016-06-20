///<reference path="../../../../typings/main.d.ts" />

import { expect } from 'chai';
import { WindowSizeDetector } from '../../../../src/device/detectors/WindowSize/WindowSizeDetector';
import * as Mocks from '../detectors.mock';
import { Device } from '../../../../src/device/Device';

describe('WindowSizeDetector', () => {
    it('should properly return screens width', (done) => {
        let windowSizeDetector = new WindowSizeDetector(Mocks.windowMock);
        let device = new Device();
        windowSizeDetector.detect(device);

        expect(device.width).to.be.equal(3);
        done();
    });

    it('should properly return screens height', (done) => {
        let windowSizeDetector = new WindowSizeDetector(Mocks.windowMock);
        let device = new Device();
        windowSizeDetector.detect(device);

        expect(device.height).to.be.equal(4);
        done();
    });
});
