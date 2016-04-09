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
        expect(normalized).to.have.property('d1', false);
        expect(normalized).to.have.property('d2', false);
        expect(normalized).to.have.property('d3', true);
        expect(normalized).to.have.property('d4', false);
        expect(normalized).to.have.property('d5', false);
        expect(normalized).to.have.property('d6', false);
        expect(normalized).to.have.property('d7', false);
        expect(normalized).to.have.property('d8', false);
        expect(normalized).to.have.property('d9', false);
        expect(normalized).to.have.property('d11', false);
        expect(normalized).to.have.property('d12', false);
        expect(normalized).to.have.property('d13', false);
        expect(normalized).to.have.property('d14', false);
        done();
    });
});