export class LocalStorageDetector {
    private localStorage;
    constructor(localStorage) {
        this.localStorage = localStorage;
    }

    isLocalStorage() {
        let localStorageItem = 'weba_localstorage_test';
        try {
            this.localStorage.setItem(localStorageItem, true);
            this.localStorage.removeItem(localStorageItem);
            return true;
        } catch (e) {
            return false;
        }
    }
}