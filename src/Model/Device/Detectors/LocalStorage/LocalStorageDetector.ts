import { Detector } from "../../Detector";
import { Device } from "../../Device";

export class LocalStorageDetector implements Detector {
    private localStorage;

    constructor(localStorage) {
        this.localStorage = localStorage;
    }

    public detect(device: Device): void {
        let localStorageItem = "w_localstorage_test";
        try {
            this.localStorage.setItem(localStorageItem, true);
            this.localStorage.removeItem(localStorageItem);
            device.isLocalStorage = true;
        } catch (e) {
            device.isLocalStorage = false;
        }
    }
}
