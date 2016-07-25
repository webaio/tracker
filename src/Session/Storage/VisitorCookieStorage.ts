import { VisitorCookieSerializer } from "../Serializer/VisitorCookieSerializer";
import { Visitor } from "../Visitor";

export class VisitorCookieStorage {
    constructor(private document: Document, private visitorCookieSerializer: VisitorCookieSerializer) {}

    public insert(visitor: Visitor) {
        this.document.cookie = this.visitorCookieSerializer.serialize(visitor);
    }

    public find(): Visitor {
        return this.visitorCookieSerializer.deserialize();
    }
}
