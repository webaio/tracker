///<reference path="../../../../typings/main.d.ts" />

import { expect } from 'chai';
import { SessionStorageDetector } from '../../../../src/device/detectors/SessionStorage/SessionStorageDetector';
import * as Mocks from '../detectors.mock';

describe('SessionStorageDetector', () => {
    it('should properly detect localStorage existance', (done) => {
        let sessionStorageDetector = new SessionStorageDetector(<any>Mocks.storageProper);

        expect(sessionStorageDetector.isSessionStorage()).to.be.equal(true);
        done();
    });

    it('should properly detect localStorage missing', (done) => {
        let sessionStorageDetector = new SessionStorageDetector(<any>{});

        expect(sessionStorageDetector.isSessionStorage()).to.be.equal(false);
        done();
    });

    it('should properly detect localStorage missing when undefined', (done) => {
        let sessionStorageDetector = new SessionStorageDetector(undefined);

        expect(sessionStorageDetector.isSessionStorage()).to.be.equal(false);
        done();
    });
});