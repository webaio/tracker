import {Detector} from '../../Detector';
import {Device} from '../../Device';

export class SessionStorageDetector implements Detector {
    private sessionStorage;
    
    constructor(sessionStorage) {
        this.sessionStorage = sessionStorage;
    }

    public detect(device: Device): void {
        let sessionStorageItem = 'weba_sessionstorage_test';
        try {
            this.sessionStorage.setItem(sessionStorageItem, true);
            this.sessionStorage.removeItem(sessionStorageItem);
            device.isSessionStorage = true;
        } catch (e) {
            device.isSessionStorage = false;
        }
    }
}
