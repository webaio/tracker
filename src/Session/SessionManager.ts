import { SessionAggregate } from "./SessionAggregate";
import { SessionCookieStorage } from "./Storage/SessionCookieStorage";
import { VisitorCookieStorage } from "./Storage/VisitorCookieStorage";
import { Session } from "./Session";
import { Visitor } from "./Visitor";

export class SessionManager {
    constructor(
        private sessionCookieStorage: SessionCookieStorage,
        private visitorCookieStorage: VisitorCookieStorage
    ) {}

    public handle(): SessionAggregate {
        let session = this.sessionCookieStorage.find();
        let visitor = this.visitorCookieStorage.find();
        let sessionAggregate: SessionAggregate;

        if (session instanceof Session && visitor instanceof Visitor) {
            sessionAggregate = SessionAggregate.getExistingSession(visitor, session);
        } else if (!session && visitor instanceof Visitor) {
            sessionAggregate = SessionAggregate.createNewSessionForExistingVisitor(visitor);
        } else {
            sessionAggregate = SessionAggregate.createNewSessionAndVisitor();
        }

        this.sessionCookieStorage.insert(sessionAggregate.session);
        this.visitorCookieStorage.insert(sessionAggregate.visitor);

        return sessionAggregate;
    }
}
