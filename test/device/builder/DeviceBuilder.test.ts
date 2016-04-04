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
            Mocks.adBlockDetector,
            Mocks.pdfDetector,
            Mocks.canvasDetector,
            Mocks.flashDetector,
            Mocks.silverlightDetector,
            Mocks.cookieDetector,
            Mocks.touchDetector,
            Mocks.quickTimeDetector,
            Mocks.javaDetector
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

    it('should properly build property device.isJavascript', (done) => {
        deviceBuilder.buildIsJavascript();
        let testDevice = deviceBuilder.getDevice();

        expect(testDevice).to.have.property('isJavascript', true);
        done();
    });

    it('should properly build property device.isPdf', (done) => {
        deviceBuilder.buildIsPdf();
        let testDevice = deviceBuilder.getDevice();

        expect(testDevice).to.have.property('isPdf', true);
        done();
    });

    it('should properly build property device.isCanvas', (done) => {
        deviceBuilder.buildIsCanvas();
        let testDevice = deviceBuilder.getDevice();

        expect(testDevice).to.have.property('isCanvas', true);
        done();
    });

    it('should properly build property device.isFlash', (done) => {
        deviceBuilder.buildIsFlash();
        let testDevice = deviceBuilder.getDevice();

        expect(testDevice).to.have.property('isFlash', true);
        done();
    });

    it('should properly build property device.isSilverlight', (done) => {
        deviceBuilder.buildIsSilverlight();
        let testDevice = deviceBuilder.getDevice();

        expect(testDevice).to.have.property('isSilverlight', true);
        done();
    });

    it('should properly build property device.isCookie', (done) => {
        deviceBuilder.buildIsCookie();
        let testDevice = deviceBuilder.getDevice();

        expect(testDevice).to.have.property('isCookie', true);
        done();
    });

    it('should properly build property device.isTouch', (done) => {
        deviceBuilder.buildIsTouch();
        let testDevice = deviceBuilder.getDevice();

        expect(testDevice).to.have.property('isTouch', true);
        done();
    });

    it('should properly build property device.isQuickTime', (done) => {
        deviceBuilder.buildIsQuickTime();
        let testDevice = deviceBuilder.getDevice();

        expect(testDevice).to.have.property('isQuickTime', true);
        done();
    });

    it('should properly build property device.isJava', (done) => {
        deviceBuilder.buildIsJava();
        let testDevice = deviceBuilder.getDevice();

        expect(testDevice).to.have.property('isJava', true);
        done();
    });
});