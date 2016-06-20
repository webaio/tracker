///<reference path="../../../../typings/main.d.ts" />

import { expect } from 'chai';
import { PdfDetector } from '../../../../src/device/detectors/Pdf/PdfDetector';
import * as Mocks from '../detectors.mock';
import { Device } from '../../../../src/device/Device';

describe('PdfDetector', () => {
    it('should properly detect pdf plugin by creating ActiveXObject', (done) => {
        let pdfDetector = new PdfDetector(<Window><any>Mocks.pdfWindowValid, <Navigator><any>Mocks.pdfNavigatorValid);
        let device = new Device();
        pdfDetector.detect(device);

        expect(device.isPdf).to.be.true;

        done();
    });

    it('should properly detect pdf plugin by looking for pdf plugins', (done) => {
        let pdfDetector = new PdfDetector(<Window><any>Mocks.pdfWindowInvalid, <Navigator><any>Mocks.pdfNavigatorValid);
        let device = new Device();
        pdfDetector.detect(device);

        expect(device.isPdf).to.be.true;

        done();
    });

    it('should not detect pdf plugin', (done) => {
        let pdfDetector = new PdfDetector(<Window><any>Mocks.pdfWindowInvalid, <Navigator><any>Mocks.pdfNavigatorInvalid);
        let device = new Device();
        pdfDetector.detect(device);

        expect(device.isPdf).to.be.false;

        done();
    });
});
