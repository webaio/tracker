import { Session } from "../Session";
import { Config } from "../../Config/Config";

export class SessionCookieSerializer {
    constructor(private document: Document, private config: Config) {}

    public serialize(session: Session): string {
        return this.config.sessionCookieName + "=" + session.sessionId + "." + session.sessionStartedAt.getTime() + "."
            + session.sessionEndedAt.getTime() 
            + ";max-age=" + this.config.sessionLifetimeInSeconds;
    }

    public deserialize(): Session {
        let value: string = "; " + this.document.cookie;
        let parts: Array<string> = value.split("; " + this.config.sessionCookieName + "=");

        if (parts.length === 2) {
            let object: string = parts.pop().split(";").shift();
            let sessionElements: Array<string> = object.split(".");

            return Session.getExistingSession(sessionElements[0], Number(sessionElements[1]), Number(sessionElements[2]));
        }

        return null;
    }
}
