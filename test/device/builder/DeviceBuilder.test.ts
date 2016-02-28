///<reference path="../../../typings/main.d.ts" />

import { expect } from 'chai';
import { DeviceBuilderImpl } from '../../../src/device/builder/DeviceBuilderImpl';
import * as Mocks from './DeviceBuilder.mock';

describe('DeviceBuilder', () => {
    let windowSizeDetector, screenSizeDetector, deviceBuilder;

    beforeEach(() => {
        windowSizeDetector = new Mocks.WindowSizeDetector();
        screenSizeDetector = new Mocks.ScreenSizeDetector();

        deviceBuilder = new DeviceBuilderImpl(screenSizeDetector, windowSizeDetector);
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
});