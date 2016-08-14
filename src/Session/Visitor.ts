import { Uuid  } from "../Common/Uuid";

export class Visitor {
    private _visitorId;
    private _firstVisitAt: Date;
    private _lastVisitAt: Date;

    static createNewVisitor(visitAt: Date): Visitor {
        return new Visitor(Uuid.generate(), visitAt, visitAt);
    }

    static getCurrentVisitor(
        visitorId: string,
        firstVisitAtInMilliseconds: number,
        lastVisitAtInMilliseconds: number
    ): Visitor {
        return new Visitor(visitorId, new Date(firstVisitAtInMilliseconds), new Date(lastVisitAtInMilliseconds));
    }

    constructor(visitorId: string, firstVisitAt: Date, lastVisitAt: Date) {
        this._visitorId = visitorId;
        this._firstVisitAt = firstVisitAt;
        this._lastVisitAt = lastVisitAt;
    }

    public updateLastVisit(visitAt: Date) {
        this._lastVisitAt = visitAt;
    }
    
    get visitorId(): string {
        return this._visitorId;
    }

    get firstVisitAt(): Date {
        return this._firstVisitAt;
    }

    get lastVisitAt(): Date {
        return this._lastVisitAt;
    }
}
