///<reference path="../../typings/main.d.ts" />

import { Config } from '../../src/config/Config';
import { ConfigImpl } from '../../src/config/ConfigImpl';
import { expect } from 'chai';

describe('Config', () => {
    it('should return config based on url', (done) => {
        let scriptElement = <HTMLScriptElement>{
            src: 'http://test.com/path/to/weba.js?trackerId=WEBA-IO-37681246287423&dataLayer=dataLayerTest'
        };
        let config: Config = new ConfigImpl();

        config.read(scriptElement);

        expect(config).to.have.property('domain', 'test.com');
        expect(config).to.have.property('trackerId', 'WEBA-IO-37681246287423');
        done();
    });

    it('should return config when dataLayer undefined', (done) => {
        let scriptElement = <HTMLScriptElement>{
            src: 'http://test.com/path/to/weba.js?trackerId=WEBA-IO-37681246287423'
        };
        let config = new ConfigImpl();

        config.read(scriptElement);

        expect(config).to.have.property('domain', 'test.com');
        expect(config).to.have.property('trackerId', 'WEBA-IO-37681246287423');
        done();
    });
});