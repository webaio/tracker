import { Detector } from "../../Detector";
import { Device } from "../../Device";

const W_COOKIE = "w_test";

export class CookieDetector implements Detector {
    private document: Document;
    private navigator: Navigator;

    constructor(document: Document, navigator: Navigator) {
        this.document = document;
        this.navigator = navigator;
    }

    public detect(device: Device): void {
        let cookieEnabled = this.navigator.cookieEnabled;
        if (typeof cookieEnabled === "undefined" || !cookieEnabled) {
            this.document.cookie = W_COOKIE;
            cookieEnabled = this.document.cookie.indexOf(W_COOKIE) !== -1;
            this.deleteCookie(W_COOKIE);
        }

        device.isCookie = cookieEnabled;
    }

    private deleteCookie(cookie): void {
        this.document.cookie = cookie + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    }
}
