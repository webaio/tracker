import { Visitor } from "../Visitor";
import { Config } from "../../Config/Config";

export class VisitorCookieSerializer {
    constructor(private document: Document, private config: Config) {}

    public serialize(visitor: Visitor): string {
        return this.config.visitorCookieName
            + "=" + visitor.visitorId + "."
                + visitor.firstVisitAt.getTime() + "."
            + visitor.lastVisitAt.getTime()
            + ";max-age=" + this.config.visitorLifetimeInSeconds;
    }

    public deserialize(): Visitor {
        let value: string = "; " + this.document.cookie;
        let parts: Array<string> = value.split("; " + this.config.visitorCookieName + "=");

        if (parts.length === 2) {
            let object: string = parts.pop().split(";").shift();
            let visitorElements: Array<string> = object.split(".");

            return Visitor.getCurrentVisitor(visitorElements[0], Number(visitorElements[1]), Number(visitorElements[2]));
        }

        return null;
    }
}
