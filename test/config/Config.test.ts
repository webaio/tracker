///<reference path="../../typings/main.d.ts" />

import { Config } from '../../src/config/Config';
import { ConfigImpl } from '../../src/config/ConfigImpl';
import { expect } from 'chai';
import * as Mocks from './config.mocks';

describe('Config', () => {
    it('should return config based on url', (done) => {
        let config: Config = new ConfigImpl(Mocks.srcElement);

        expect(config).to.have.property('domain', '//test.com');
        expect(config).to.have.property('trackerId', 'WEBA-IO-37681246287423');
        done();
    });
});
