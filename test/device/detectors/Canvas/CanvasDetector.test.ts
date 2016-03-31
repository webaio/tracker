///<reference path="../../../../typings/main.d.ts" />

import { expect } from 'chai';
import { CanvasDetector } from '../../../../src/device/detectors/Canvas/CanvasDetector';
import * as Mocks from '../detectors.mock';

describe('CanvasDetector', () => {
    it('should properly detect canvas properly', (done) => {
        let canvasDetector = new CanvasDetector(Mocks.canvasWindowValid);

        let detected = canvasDetector.isCanvas();

        expect(detected).to.be.true;

        done();
    });

    it('should not detect canvas when cannot create canvas HTMLElement', (done) => {
        let canvasDetector = new CanvasDetector(Mocks.canvasWindowInvalid);

        let detected = canvasDetector.isCanvas();

        expect(detected).to.be.false;

        done();
    });
});