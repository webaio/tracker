///<reference path='../../../typings/main.d.ts' />

import { expect } from 'chai';
import * as sinon from 'sinon';
import { RequestHandler } from '../../../src/request/handler/RequestHandler';
import * as Mocks from './RequestHandler.mock';
import { QueryStringBuilder } from '../../../src/queryString/builder/QueryStringBuilder';
import { Config } from '../../../src/config/Config';
import { Request } from '../../../src/request/Request';
import {NormalizedParameters} from '../../../src/parameters/normalizer/NormalizedParameters';

describe('RequestHandler', () => {
    let requestHandler,
        buildQueryString,
        getQueryString,
        send,
        normalizedParams;


    it('should run all handlers methods', (done) => {
        requestHandler = new RequestHandler(
            <QueryStringBuilder> <any>Mocks.queryStringBuilder,
            <Config> <any>Mocks.config,
            <Request> <any>Mocks.request
        );

        buildQueryString = sinon.spy(Mocks.queryStringBuilder, 'buildQueryString');
        getQueryString = sinon.spy(Mocks.queryStringBuilder, 'getQueryString');
        send = sinon.spy(Mocks.request, 'send');

        normalizedParams = new NormalizedParameters().initEmpty();

        requestHandler.handle(normalizedParams);

        expect(buildQueryString.calledOnce).to.be.true;
        expect(getQueryString.calledOnce).to.be.true;
        expect(send.calledOnce).to.be.true;
        done();
    });
});