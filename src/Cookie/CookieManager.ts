import { Cookie } from "./Cookie";

export class CookieManager {
    constructor(private document: Document) {}
    
    public add(cookie: Cookie) {
        this.document.cookie = cookie.toString();
    }
}
