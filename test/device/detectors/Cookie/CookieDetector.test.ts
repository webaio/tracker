///<reference path="../../../../typings/main.d.ts" />

import { expect } from 'chai';
import { CookieDetector } from '../../../../src/device/detectors/Cookie/CookieDetector';
import * as Mocks from '../detectors.mock';
import { Device } from '../../../../src/device/Device';

describe('CookieDetector', () => {
    it('should properly detect cookie from navigator', (done) => {
        let cookieDetector = new CookieDetector(
            <Document><any>Mocks.cookieDocument,
            <Navigator><any>Mocks.cookieNavigatorValid
        );
        let device = new Device();
        cookieDetector.detect(device);

        expect(device.isCookie).to.be.true;

        done();
    });

    it('should detect cookie by pushing into document.cookie', (done) => {
        let cookieDetector = new CookieDetector(
            <Document><any>Mocks.cookieDocument,
            <Navigator><any>Mocks.cookieNavigatorInvalid
        );

        let device = new Device();
        cookieDetector.detect(device);

        expect(device.isCookie).to.be.true;

        done();
    });
});