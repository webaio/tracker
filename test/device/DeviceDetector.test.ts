///<reference path='../../typings/main.d.ts' />

import { expect } from 'chai';
import { DeviceDetector } from '../../src/device/DeviceDetector';
import * as Mocks from './Detector.mock';
import {Device} from '../../src/device/Device';

describe('DeviceDetector', () => {
    it('should add detector to list', (done) => {
        let deviceDetector = new DeviceDetector();
        deviceDetector.addDetector(Mocks.detector1);

        done();
    });

    it('should detect device from detectors list', (done) => {
        let deviceDetector = new DeviceDetector();
        let device = new Device();
        deviceDetector.addDetector(Mocks.detector1);
        deviceDetector.addDetector(Mocks.detector2);
        deviceDetector.detect(device);

        expect(device.isAdBlock).to.be.true;
        expect(device.isCookie).to.be.false;
        done();
    });

    it('should detect retrieve device after detectors finish detect', (done) => {
        let deviceDetector = new DeviceDetector();
        let device = new Device();
        deviceDetector.addDetector(Mocks.detector2);
        deviceDetector.detect(device);

        expect(deviceDetector.getDevice().isCookie).to.be.false;
        done();
    });
});
