///<reference path="../../../../typings/main.d.ts" />

import { expect } from 'chai';
import { LocalStorageDetector } from '../../../../src/device/detectors/LocalStorage/LocalStorageDetector';
import * as Mocks from '../detectors.mock';
import { Device } from '../../../../src/device/Device';

describe('LocalStorageDetector', () => {
    it('should properly detect localStorage existance', (done) => {
        let localStorageDetector = new LocalStorageDetector(<any>Mocks.storageProper);
        let device = new Device();
        localStorageDetector.detect(device);

        expect(device.isLocalStorage).to.be.equal(true);

        done();
    });

    it('should properly detect localStorage missing', (done) => {
        let localStorageDetector = new LocalStorageDetector(<any>{});
        let device = new Device();
        localStorageDetector.detect(device);

        expect(device.isLocalStorage).to.be.equal(false);

        done();
    });

    it('should properly detect localStorage missing when undefined', (done) => {
        let localStorageDetector = new LocalStorageDetector(undefined);
        let device = new Device();
        localStorageDetector.detect(device);

        expect(device.isLocalStorage).to.be.equal(false);

        done();
    });
});
