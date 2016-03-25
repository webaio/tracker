///<reference path="../../../../typings/main.d.ts" />

import { expect } from 'chai';
import { LocalStorageDetector } from '../../../../src/device/detectors/LocalStorage/LocalStorageDetector';
import * as Mocks from '../detectors.mock';

describe('LocalStorageDetector', () => {
    it('should properly detect localStorage existance', (done) => {
        let localStorageDetector = new LocalStorageDetector(<any>Mocks.storageProper);

        expect(localStorageDetector.isLocalStorage()).to.be.equal(true);
        done();
    });

    it('should properly detect localStorage missing', (done) => {
        let localStorageDetector = new LocalStorageDetector(<any>{});

        expect(localStorageDetector.isLocalStorage()).to.be.equal(false);
        done();
    });

    it('should properly detect localStorage missing when undefined', (done) => {
        let localStorageDetector = new LocalStorageDetector(undefined);

        expect(localStorageDetector.isLocalStorage()).to.be.equal(false);
        done();
    });
});