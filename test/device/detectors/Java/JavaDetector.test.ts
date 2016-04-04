///<reference path="../../../../typings/main.d.ts" />

import { expect } from 'chai';
import { JavaDetector } from '../../../../src/device/detectors/Java/JavaDetector';
import * as Mocks from '../detectors.mock';

describe('JavaDetector', () => {
    it('should properly detect java properly', (done) => {
        let javaDetector = new JavaDetector(<Navigator><any>Mocks.javaNavigatorValid);

        let detected = javaDetector.isJava();

        expect(detected).to.be.true;

        done();
    });

    it('should not detect canvas when javaEnabled without property', (done) => {
        let javaDetector = new JavaDetector(<Navigator><any>Mocks.javaNavigatorInalid);

        let detected = javaDetector.isJava();

        expect(detected).to.be.false;

        done();
    });

    it('should not detect canvas when javaEnabled is not function', (done) => {
        let javaDetector = new JavaDetector(<Navigator><any>Mocks.javaNavigatorNotMethod);

        let detected = javaDetector.isJava();

        expect(detected).to.be.false;

        done();
    });
});