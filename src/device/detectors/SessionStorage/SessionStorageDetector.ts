export class SessionStorageDetector {
    private sessionStorage;
    constructor(sessionStorage) {
        this.sessionStorage = sessionStorage;
    }

    isSessionStorage() {
        let sessionStorageItem = 'weba_sessionstorage_test';
        try {
            this.sessionStorage.setItem(sessionStorageItem, true);
            this.sessionStorage.removeItem(sessionStorageItem);
            return true;
        } catch (e) {
            return false;
        }
    }
}