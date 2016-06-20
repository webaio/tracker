///<reference path="../../../../typings/main.d.ts" />

import { expect } from 'chai';
import { SessionStorageDetector } from '../../../../src/device/detectors/SessionStorage/SessionStorageDetector';
import * as Mocks from '../detectors.mock';
import { Device } from '../../../../src/device/Device';

describe('SessionStorageDetector', () => {
    it('should properly detect localStorage existance', (done) => {
        let sessionStorageDetector = new SessionStorageDetector(<any>Mocks.storageProper);
        let device = new Device();
        sessionStorageDetector.detect(device);

        expect(device.isSessionStorage).to.be.equal(true);
        done();
    });

    it('should properly detect localStorage missing', (done) => {
        let sessionStorageDetector = new SessionStorageDetector(<any>{});
        let device = new Device();
        sessionStorageDetector.detect(device);

        expect(device.isSessionStorage).to.be.equal(false);
        done();
    });

    it('should properly detect localStorage missing when undefined', (done) => {
        let sessionStorageDetector = new SessionStorageDetector(undefined);
        let device = new Device();
        sessionStorageDetector.detect(device);

        expect(device.isSessionStorage).to.be.equal(false);
        done();
    });
});
