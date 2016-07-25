import { Builder } from "../Builder";
import { Model } from "../Model";
import { SessionManager } from "../../Session/SessionManager";
import { SessionAggregate } from "../../Session/SessionAggregate";
import { Visitor } from "./Visitor";

export class VisitorBuilder implements Builder {
    constructor(private sessionManager: SessionManager) {}

    build(model: Model, dataLayerElementPayload: any) {
        let sessionAggregate: SessionAggregate = this.sessionManager.handle();
        let visitor: Visitor = new Visitor();
        visitor.sessionId = sessionAggregate.session.sessionId;
        visitor.visitorId = sessionAggregate.visitor.visitorId;
        visitor.firstVisitAt = sessionAggregate.visitor.firstVisitAt.getTime();
        visitor.currentVisitAt = sessionAggregate.visitor.lastVisitAt.getTime();
        visitor.sessionStartedAt = sessionAggregate.session.sessionStartedAt.getTime();
        visitor.sessionEndedAt = sessionAggregate.session.sessionEndedAt.getTime();
        model.visitor = visitor;
    }
}
