///<reference path="../../../typings/main.d.ts" />

import { expect } from 'chai';
import * as sinon from 'sinon';
import { DeviceDirector } from '../../../src/device/director/DeviceDirector';
import * as Mocks from './DeviceDirector.mock';

describe('DeviceDirector', () => {

    it('should run all builder methods', (done) => {
        let deviceBuilder = new Mocks.DeviceBuilderImpl();
        let deviceDirector = new DeviceDirector(deviceBuilder);

        let widthSpy = sinon.spy(deviceBuilder, 'buildWidth');
        let heightSpy = sinon.spy(deviceBuilder, 'buildHeight');
        let availableWidthSpy = sinon.spy(deviceBuilder, 'buildAvailableWidth');
        let availableHeightSpy = sinon.spy(deviceBuilder, 'buildAvailableHeight');
        let isLocalStorageSpy = sinon.spy(deviceBuilder, 'buildIsLocalStorage');
        let isSessionStorageSpy = sinon.spy(deviceBuilder, 'buildIsSessionStorage');
        let isAdBlockSpy = sinon.spy(deviceBuilder, 'buildIsAdBlock');
        let isJavascriptSpy = sinon.spy(deviceBuilder, 'buildIsJavascript');
        let isPdfSpy = sinon.spy(deviceBuilder, 'buildIsPdf');

        deviceDirector.buildDevice();

        expect(widthSpy.calledOnce).to.be.true;
        expect(heightSpy.calledOnce).to.be.true;
        expect(availableWidthSpy.calledOnce).to.be.true;
        expect(availableHeightSpy.calledOnce).to.be.true;
        expect(isLocalStorageSpy.calledOnce).to.be.true;
        expect(isSessionStorageSpy.calledOnce).to.be.true;
        expect(isAdBlockSpy.calledOnce).to.be.true;
        expect(isJavascriptSpy.calledOnce).to.be.true;
        expect(isPdfSpy.calledOnce).to.be.true;
        done();
    });

    it('should run builders method getDevice properly', (done) => {
        let deviceBuilder = new Mocks.DeviceBuilderImpl();
        let deviceDirector = new DeviceDirector(deviceBuilder);

        let deviceSpy = sinon.spy(deviceBuilder, 'getDevice');

        deviceDirector.getDevice();

        expect(deviceSpy.calledOnce).to.be.true;
        done();
    });

});