import { Uuid  } from "../Common/Uuid";

export class Visitor {
    private _visitorId;
    private _firstVisitAt: Date;
    private _lastVisitAt: Date;

    constructor(visitorId: string, firstVisitAt: Date, lastVisitAt: Date) {
        this._visitorId = visitorId;
        this._firstVisitAt = firstVisitAt;
        this._lastVisitAt = lastVisitAt;
    }

    static createNewVisitor(visitAt: Date) {
        return new Visitor(Uuid.generate(), visitAt, visitAt);
    }

    static getCurrentVisitor(visitorId: string, firstVisitAtInMilliseconds: number, lastVisitAtInMilliseconds: number) {
        return new Visitor(visitorId, new Date(firstVisitAtInMilliseconds), new Date(lastVisitAtInMilliseconds));
    }

    public updateLastVisit(visitAt: Date) {
        this._lastVisitAt = visitAt;
    }
    
    get visitorId() {
        return this._visitorId;
    }

    get firstVisitAt() {
        return this._firstVisitAt;
    }

    get lastVisitAt() {
        return this._lastVisitAt;
    }
}
