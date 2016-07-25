import { Uuid } from "../Common/Uuid";

export class Session {
    private _sessionId: string;
    private _sessionStartedAt: Date;
    private _sessionEndedAt: Date;

    constructor(sessionId: string, sessionStartedAt: Date, sessionEndedAt: Date) {
        this._sessionId = sessionId;
        this._sessionStartedAt = sessionStartedAt;
        this._sessionEndedAt = sessionEndedAt;
    }

    static createNewSession(visitAt: Date) {
        return new Session(Uuid.generate(), visitAt, new Date(visitAt.getTime() + 1800000));
    }

    static getExistingSession(sessionId: string, sessionStartedAt: number, sessionEndedAt: number) {
        return new Session(sessionId, new Date(sessionStartedAt), new Date(sessionEndedAt));
    }

    public renewSession(visitAt: Date) {
        this._sessionEndedAt = new Date(visitAt.getTime() + 1800000);
    }

    get sessionId() {
        return this._sessionId;
    }
    
    get sessionStartedAt() {
        return this._sessionStartedAt;
    }
    
    get sessionEndedAt() {
        return this._sessionEndedAt;
    }
}
