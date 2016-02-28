///<reference path="../../typings/main.d.ts" />

import { ConfigReader } from '../../src/config/ConfigReader';
import { expect } from 'chai';

describe('ConfigReader', () => {
    it('should return config based on url', (done) => {
        let scriptElement = { src: 'http://test.com/path/to/weba.js?trackerId=WEBA-IO-37681246287423&dataLayer=dataLayerTest' };
        let decoder = new ConfigReader(scriptElement);
        let config = decoder.read();

        expect(config).to.have.property('domain', 'test.com');
        expect(config).to.have.property('trackerId', 'WEBA-IO-37681246287423');
        expect(config).to.have.property('dataLayer', 'dataLayerTest');
        done();
    });

    it('should return config when dataLayer undefined', (done) => {
        let scriptElement = { src: 'http://test.com/path/to/weba.js?trackerId=WEBA-IO-37681246287423' };
        let decoder = new ConfigReader(scriptElement);
        let config = decoder.read();

        expect(config).to.have.property('domain', 'test.com');
        expect(config).to.have.property('trackerId', 'WEBA-IO-37681246287423');
        expect(config).to.have.property('dataLayer', 'dataLayer');
        done();
    });
});