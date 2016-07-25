import { SessionCookieSerializer } from "../Serializer/SessionCookieSerializer";
import { Session } from "../Session";

export class SessionCookieStorage {
    constructor(private document: Document, private sessionCookieSerializer: SessionCookieSerializer) {}

    public insert(session: Session) {
        this.document.cookie = this.sessionCookieSerializer.serialize(session);
    }

    public find() {
        return this.sessionCookieSerializer.deserialize();
    }
}
