///<reference path="../../../typings/main.d.ts" />

import { expect } from 'chai';
import * as sinon from 'sinon';
import { ParametersDirector } from '../../../src/parameters/director/ParametersDirector';
import * as Mocks from './ParametersDirector.mock';

describe('ParametersDirector', () => {
    let parametersDirector,
        parametersBuilder;

    before(() => {
        parametersBuilder = new Mocks.ParametersBuilderImpl();
        parametersDirector = new ParametersDirector(parametersBuilder);
    });

    it('should run all builder methods', (done) => {
        let buildDevice = sinon.spy(parametersBuilder, 'buildDevice');
        let buildTrackerId = sinon.spy(parametersBuilder, 'buildTrackerId');
        let buildUrl = sinon.spy(parametersBuilder, 'buildUrl');
        let buildEvent = sinon.spy(parametersBuilder, 'buildEvent');
        let buildDate = sinon.spy(parametersBuilder, 'buildDate');

        parametersDirector.buildParameters(Mocks.dataLayerElement);

        expect(buildDevice.calledOnce).to.be.true;
        expect(buildTrackerId.calledOnce).to.be.true;
        expect(buildUrl.calledOnce).to.be.true;
        expect(buildEvent.calledOnce).to.be.true;
        expect(buildDate.calledOnce).to.be.true;
        done();
    });

    it('should run builders method getParameters properly', (done) => {
        let parametersBuilderSpy = sinon.spy(parametersBuilder, 'getParameters');

        parametersDirector.getParameters();

        expect(parametersBuilderSpy.calledOnce).to.be.true;
        done();
    });

});