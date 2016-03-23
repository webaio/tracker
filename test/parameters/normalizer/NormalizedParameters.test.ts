///<reference path='../../../typings/main.d.ts' />

import { expect } from 'chai';
import { NormalizedParameters } from '../../../src/parameters/normalizer/NormalizedParameters';

describe('NormalizedParameters', () => {

    it('should return empty NormalizedParameters object', (done) => {
        let normalizedParameters = new NormalizedParameters();

        let normalized: NormalizedParameters = normalizedParameters.initEmpty();
        expect(normalized).to.have.property('h', 0);
        expect(normalized).to.have.property('w', 0);
        expect(normalized).to.have.property('ah', 0);
        expect(normalized).to.have.property('aw', 0);
        expect(normalized).to.have.property('rd', '');
        expect(normalized).to.have.property('e', '');
        expect(normalized).to.have.property('t', '');
        expect(normalized).to.have.property('u', '');
        done();
    });
});