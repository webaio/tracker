///<reference path="../../../../typings/main.d.ts" />

import { expect } from 'chai';
import { RealPlayerDetector } from '../../../../src/device/detectors/RealPlayer/RealPlayerDetector';
import * as Mocks from '../detectors.mock';
import { Device } from '../../../../src/device/Device';

describe('RealPlayerDetector', () => {
    it('should properly detect pdf plugin by creating ActiveXObject', (done) => {
        let realPlayerDetector = new RealPlayerDetector(Mocks.realPlayerfWindowValid, <Navigator><any>Mocks.realPlayerNavigatorValid);
        let device = new Device();
        realPlayerDetector.detect(device);

        expect(device.isRealPlayer).to.be.true;

        done();
    });

    it('should properly detect pdf plugin by looking for pdf plugins', (done) => {
        let realPlayerDetector = new RealPlayerDetector(Mocks.realPlayerfWindowInalid, <Navigator><any>Mocks.realPlayerNavigatorValid);
        let device = new Device();
        realPlayerDetector.detect(device);

        expect(device.isRealPlayer).to.be.true;

        done();
    });

    it('should not detect pdf plugin', (done) => {
        let realPlayerDetector = new RealPlayerDetector(Mocks.realPlayerfWindowInalid, <Navigator><any>Mocks.realPlayerNavigatorInvalid);
        let device = new Device();
        realPlayerDetector.detect(device);

        expect(device.isRealPlayer).to.be.false;

        done();
    });
});
