import { Session } from "./Session";
import { Visitor } from "./Visitor";

export class SessionAggregate {
    private _session: Session;
    private _visitor: Visitor;

    constructor(session: Session, visitor: Visitor) {
        this._session = session;
        this._visitor = visitor;
    }

    static createNewSessionAndVisitor() {
        let currentDate = new Date();
        let session: Session = Session.createNewSession(currentDate);
        let visitor: Visitor = Visitor.createNewVisitor(currentDate);

        return new SessionAggregate(session, visitor);
    }

    static createNewSessionForExistingVisitor(visitor: Visitor) {
        let currentDate = new Date();
        let session: Session = Session.createNewSession(currentDate);
        visitor.updateLastVisit(currentDate);

        return new SessionAggregate(session, visitor);
    }

    static getExistingSession(visitor: Visitor, session: Session) {
        let currentDate = new Date();
        visitor.updateLastVisit(currentDate);
        session.renewSession(currentDate);
        
        return new SessionAggregate(session, visitor);
    }

    get session() {
        return this._session;
    }

    get visitor() {
        return this._visitor;
    }
}
