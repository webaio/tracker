///<reference path="../../../../typings/main.d.ts" />

import { expect } from 'chai';
import { TouchDetector } from '../../../../src/device/detectors/Touch/TouchDetector';
import * as Mocks from '../detectors.mock';

describe('TouchDetector', () => {
    it('should properly detect touch screen from window object', (done) => {
        let touchDetector = new TouchDetector(Mocks.touchWindowValid, <Navigator><any>Mocks.touchNavigatorValid);

        let detected = touchDetector.isTouch();

        expect(detected).to.be.true;

        done();
    });

    it('should detect touch screen by checking navigator', (done) => {
        let touchDetector = new TouchDetector(Mocks.touchWindowInvalid, <Navigator><any>Mocks.touchNavigatorValid);

        let detected = touchDetector.isTouch();

        expect(detected).to.be.true;

        done();
    });

    it('shouldn\'t detect touch screen', (done) => {
        let touchDetector = new TouchDetector(Mocks.touchWindowInvalid, <Navigator><any>Mocks.touchNavigatorInvalid);

        let detected = touchDetector.isTouch();

        expect(detected).to.be.false;

        done();
    });
});