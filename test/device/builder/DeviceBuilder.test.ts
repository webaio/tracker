///<reference path="../../../typings/main.d.ts" />

import { expect } from 'chai';
import { DeviceBuilderImpl } from '../../../src/device/builder/DeviceBuilderImpl';
import * as Mocks from './DeviceBuilder.mock';

describe('DeviceBuilder', () => {
    let deviceBuilder;

    beforeEach(() => {
        deviceBuilder = new DeviceBuilderImpl(
            Mocks.screenSizeDetector,
            Mocks.windowSizeDetector,
            Mocks.localStorageDetector,
            Mocks.sessionStorageDetector,
            Mocks.adBlockDetector
        );
    });

    it('should properly build property device.width', (done) => {
        deviceBuilder.buildWidth();
        let testDevice = deviceBuilder.getDevice();

        expect(testDevice).to.have.property('width', 1);
        done();
    });

    it('should properly build property device.height', (done) => {
        deviceBuilder.buildHeight();
        let testDevice = deviceBuilder.getDevice();

        expect(testDevice).to.have.property('height', 2);
        done();
    });

    it('should properly build property device.availableWidth', (done) => {
        deviceBuilder.buildAvailableWidth();
        let testDevice = deviceBuilder.getDevice();

        expect(testDevice).to.have.property('availableWidth', 3);
        done();
    });

    it('should properly build property device.availableHeight', (done) => {
        deviceBuilder.buildAvailableHeight();
        let testDevice = deviceBuilder.getDevice();

        expect(testDevice).to.have.property('availableHeight', 4);
        done();
    });

    it('should properly build property device.isLocalStorage', (done) => {
        deviceBuilder.buildIsLocalStorage();
        let testDevice = deviceBuilder.getDevice();

        expect(testDevice).to.have.property('isLocalStorage', true);
        done();
    });

    it('should properly build property device.isSessionStorage', (done) => {
        deviceBuilder.buildIsSessionStorage();
        let testDevice = deviceBuilder.getDevice();

        expect(testDevice).to.have.property('isSessionStorage', false);
        done();
    });

    it('should properly build property device.isAdBlock', (done) => {
        deviceBuilder.buildIsAdBlock();
        let testDevice = deviceBuilder.getDevice();

        expect(testDevice).to.have.property('isAdBlock', true);
        done();
    });
});