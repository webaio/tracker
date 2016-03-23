///<reference path='../../../typings/main.d.ts' />

import { expect } from 'chai';
import { ParametersNormalizer } from '../../../src/parameters/normalizer/ParametersNormalizer';
import { NormalizedParameters } from '../../../src/parameters/normalizer/NormalizedParameters';

describe('ParametersNormalizer', () => {

    it('should properly normalize Parameters object', (done) => {
        let parametersNormalizer = new ParametersNormalizer();
        let parameters = {
            height: 1,
            width: 2,
            availableHeight: 3,
            availableWidth: 4,
            date: 'test',
            event: 'testE',
            url: 'testU',
            trackerId: 'WEBA-123'
        };

        let normalized: NormalizedParameters = parametersNormalizer.normalize(parameters);
        expect(normalized).to.have.property('h', 1);
        expect(normalized).to.have.property('w', 2);
        expect(normalized).to.have.property('ah', 3);
        expect(normalized).to.have.property('aw', 4);
        expect(normalized).to.have.property('rd', 'test');
        expect(normalized).to.have.property('e', 'testE');
        expect(normalized).to.have.property('t', 'WEBA-123');
        expect(normalized).to.have.property('u', 'testU');
        done();
    });
});