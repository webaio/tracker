///<reference path="../../typings/main.d.ts" />

import { UrlDecoder } from '../../src/config/UrlDecoder';
import { expect } from 'chai';

describe('UrlDecoder', () => {
    it('should decode url without any query params', (done) => {
        let decoder = new UrlDecoder('http://test1.com');
        expect(decoder.getDomain()).to.equals('test1.com');
        expect(decoder.getParams()).to.be.empty;
        done();
    });

    it('should decode url and query params', (done) => {
        let decoder = new UrlDecoder('http://test2.com/?testId=1&testDataLayer=testData');
        expect(decoder.getDomain()).to.equals('test2.com');
        expect(decoder.getParams()).to.have.property('testId', '1');
        expect(decoder.getParams()).to.have.property('testDataLayer', 'testData');
        done();
    });

    it('should decode url with double-slash protocol definition', (done) => {
        let decoder = new UrlDecoder('//test3.com');
        expect(decoder.getDomain()).to.equals('test3.com');
        expect(decoder.getParams()).to.be.empty;
        done();
    });

    it('should decode url with www expression', (done) => {
        let decoder = new UrlDecoder('www.test4.com');
        expect(decoder.getDomain()).to.equals('www.test4.com');
        expect(decoder.getParams()).to.be.empty;
        done();
    });

    it('should decode url and params when url contains some subdirections', (done) => {
        let decoder = new UrlDecoder('//test5.com/someDir/anotherDir/weba.js?testId=2');
        expect(decoder.getDomain()).to.equals('test5.com');
        expect(decoder.getParams()).to.have.property('testId', '2');
        done();
    });
});