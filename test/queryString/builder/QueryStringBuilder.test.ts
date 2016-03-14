///<reference path='../../../typings/main.d.ts' />

import { expect } from 'chai';
import { QueryStringBuilder } from '../../../src/queryString/builder/QueryStringBuilder';
import { NormalizedParameters } from '../../../src/parameters/normalizer/NormalizedParameters';

describe('QueryStringBuilder', () => {
    it('should properly build queryString', (done) => {
        let qsBuilder = new QueryStringBuilder();
        let normalizedParameters = new NormalizedParameters();

        normalizedParameters.u = 'http://test.com/test?campaign=something';
        normalizedParameters.t = 'WEBA-123';
        normalizedParameters['test'] = 'test';

        qsBuilder.buildQueryString(normalizedParameters);

        expect(qsBuilder.getQueryString()).to.be.equal('u=http%3A%2F%2Ftest.com%2Ftest%3Fcampaign%3Dsomething&t=WEBA-123');
        done();
    });
});