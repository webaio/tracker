///<reference path="../../typings/main.d.ts" />

import { expect } from 'chai';
import { Device } from '../../src/device/Device';
import { DeviceImpl } from '../../src/device/DeviceImpl';

describe('DeviceBuilder', () => {

    it('should properly set property width', (done) => {
        let device = new DeviceImpl();
        device.setWidth(100);

        expect(device.width).to.be.equal(100);
        done();
    });

    it('should properly set property height', (done) => {
        let device = new DeviceImpl();
        device.setHeight(200);

        expect(device.height).to.be.equal(200);
        done();
    });

    it('should properly set property availableWidth', (done) => {
        let device = new DeviceImpl();
        device.setAvailableWidth(300);

        expect(device.availableWidth).to.be.equal(300);
        done();
    });

    it('should properly set property availableHeight', (done) => {
        let device = new DeviceImpl();
        device.setAvailableHeight(400);

        expect(device.availableHeight).to.be.equal(400);
        done();
    });
});