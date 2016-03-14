///<reference path="../../../typings/main.d.ts" />

import { expect } from 'chai';
import * as sinon from 'sinon';
import { ParametersBuilderImpl } from '../../../src/parameters/builder/ParametersBuilderImpl';
import * as Mocks from './ParametersBuilder.mock';
import { Config } from '../../../src/config/Config';
import { DeviceDirector } from '../../../src/device/director/DeviceDirector';

describe('ParametersBuilder', () => {
    let parametersBuilder;

    before(() => {
        parametersBuilder = new ParametersBuilderImpl(<Config> <any>Mocks.config, Mocks.global, <DeviceDirector> <any>Mocks.deviceDirector);
    });

    it('should properly build property device', (done) => {
        let buildDevice = sinon.spy(Mocks.deviceDirector, 'buildDevice');
        let getDevice = sinon.spy(Mocks.deviceDirector, 'getDevice');
        parametersBuilder.buildDevice();

        let testParameters = parametersBuilder.getParameters();

        expect(buildDevice.calledOnce).to.be.true;
        expect(getDevice.calledOnce).to.be.true;
        expect(testParameters).to.have.property('width');
        expect(testParameters).to.have.property('height');
        expect(testParameters).to.have.property('availableWidth');
        expect(testParameters).to.have.property('availableHeight');
        done();
    });

    it('should properly build property parameters.trackerId', (done) => {
        parametersBuilder.buildTrackerId();
        let testParameters = parametersBuilder.getParameters();

        expect(testParameters).to.have.property('trackerId', 'WEBA-123');
        done();
    });

    it('should properly build property parameters.url', (done) => {
        parametersBuilder.buildUrl();
        let testParameters = parametersBuilder.getParameters();

        expect(testParameters).to.have.property('url', 'http%3A%2F%2Flocalhost%3A8000%2Ftest.php%3F_utm_campaign%3Dwebatest');
        done();
    });

    it('should properly build property parameters.event', (done) => {
        parametersBuilder.buildEvent({event: 'test'});
        let testParameters = parametersBuilder.getParameters();

        expect(testParameters).to.have.property('event', 'test');
        done();
    });

    it('should properly build property parameters.date', (done) => {
        parametersBuilder.buildDate({date: '2016-03-22T21:26:53.591Z'});
        let testParameters = parametersBuilder.getParameters();

        expect(testParameters).to.have.property('date', '2016-03-22T21%3A26%3A53.591Z');
        done();
    });
});