const WEBA_COOKIE = 'weba_test';

export class CookieDetector {
    private document: Document;
    private navigator: Navigator;

    constructor (document: Document, navigator: Navigator) {
        this.document = document;
        this.navigator = navigator;
    }

    isCookie () {
        let cookieEnabled = this.navigator.cookieEnabled;
        if (typeof cookieEnabled === 'undefined' || !cookieEnabled) {
            this.document.cookie = WEBA_COOKIE;
            cookieEnabled = this.document.cookie.indexOf(WEBA_COOKIE) !== -1;
            this.deleteCookie(WEBA_COOKIE);
        }

        return cookieEnabled;
    }

    private deleteCookie (cookie) {
        this.document.cookie = cookie + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
}