///<reference path="../../../typings/main.d.ts" />

import { expect } from 'chai';
import * as sinon from 'sinon';
import * as Mocks from './EventHandler.mock';
import { EventHandler } from '../../../src/event/handler/EventHandler';
import { ParametersDirector } from '../../../src/parameters/director/ParametersDirector';
import { RequestHandler } from '../../../src/request/handler/RequestHandler';
import { ParametersNormalizer } from '../../../src/parameters/normalizer/ParametersNormalizer';

describe('EventHandler', () => {
    let eventHandler,
        buildParameters,
        getParameters,
        handle,
        normalize;

    before(() => {
        eventHandler = new EventHandler(
            <ParametersDirector> <any>Mocks.parametersDirector,
            <RequestHandler> <any>Mocks.requestHandler,
            <ParametersNormalizer> <any>Mocks.parametersNormalizer
        );

        buildParameters = sinon.spy(Mocks.parametersDirector, 'buildParameters');
        getParameters = sinon.spy(Mocks.parametersDirector, 'getParameters');
        handle = sinon.spy(Mocks.requestHandler, 'handle');
        normalize = sinon.spy(Mocks.parametersNormalizer, 'normalize');
    });

    beforeEach(() => {
        buildParameters.reset();
        getParameters.reset();
        handle.reset();
        normalize.reset();
    });

    it('should run all handlers methods', (done) => {
        eventHandler.handle(Mocks.dataLayerElement);

        expect(buildParameters.calledOnce).to.be.true;
        expect(getParameters.calledOnce).to.be.true;
        expect(handle.calledOnce).to.be.true;
        expect(normalize.calledOnce).to.be.true;
        done();
    });

    it('should run all handlers methods more then once', (done) => {
        eventHandler.handle(Mocks.dataLayerElements);

        expect(buildParameters.callCount).to.be.equal(3);
        expect(getParameters.callCount).to.be.equal(3);
        expect(handle.callCount).to.be.equal(3);
        expect(normalize.callCount).to.be.equal(3);
        done();
    });
});