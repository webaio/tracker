///<reference path="../../../typings/main.d.ts" />

import { expect } from 'chai';
import { WindowSizeDetector } from '../../../src/device/detectors/WindowSizeDetector';
import * as Mocks from './detectors.mock';

describe('WindowSizeDetector', () => {
    it('should properly return screens width', (done) => {
        let windowSizeDetector = new WindowSizeDetector(Mocks.windowMock);

        expect(windowSizeDetector.getWidth()).to.be.equal(3);
        done();
    });

    it('should properly return screens height', (done) => {
        let windowSizeDetector = new WindowSizeDetector(Mocks.windowMock);

        expect(windowSizeDetector.getHeight()).to.be.equal(4);
        done();
    });
});