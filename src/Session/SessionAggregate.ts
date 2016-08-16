import { Session } from "./Session";
import { Visitor } from "./Visitor";

export class SessionAggregate {
    private _session: Session;
    private _visitor: Visitor;

    static createNewSessionAndVisitor(): SessionAggregate {
        let currentDate: Date = new Date();
        let session: Session = Session.createNewSession(currentDate);
        let visitor: Visitor = Visitor.createNewVisitor(currentDate);

        return new SessionAggregate(session, visitor);
    }

    static createNewSessionForExistingVisitor(visitor: Visitor): SessionAggregate {
        let currentDate: Date = new Date();
        let session: Session = Session.createNewSession(currentDate);
        visitor.updateLastVisit(currentDate);

        return new SessionAggregate(session, visitor);
    }

    static getExistingSession(visitor: Visitor, session: Session): SessionAggregate {
        let currentDate: Date = new Date();
        visitor.updateLastVisit(currentDate);
        session.renewSession(currentDate);

        return new SessionAggregate(session, visitor);
    }

    constructor(session: Session, visitor: Visitor) {
        this._session = session;
        this._visitor = visitor;
    }

    get session(): Session {
        return this._session;
    }

    get visitor(): Visitor {
        return this._visitor;
    }
}
