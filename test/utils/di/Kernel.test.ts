///<reference path="../../../typings/main.d.ts" />

import { expect } from 'chai';
import { Kernel } from '../../../src/weba';

describe('Kernel', () => {
    it('should contain an array', (done) => {
        let kernel = new Kernel();

        expect(kernel.getDeps()).to.be.instanceof(Array);
        done();
    });
});