import { Builder } from "../Builder";
import { Model } from "../Model";
import { Visitor } from "./Visitor";
import { Uuid } from "../../Common/Uuid";
import { CookieManager } from "../../Cookie/CookieManager";
import {Cookie} from "../../Cookie/Cookie";

export class VisitorBuilder implements Builder {
    constructor(private cookieManager: CookieManager) {}

    build(model: Model, dataLayerElementPayload: any) {
        let visitor = new Visitor();

        visitor.visitorId = Uuid.generate();
        visitor.sessionId = Uuid.generate();
        visitor.firstVisitAt = Math.round(new Date().getTime()/1000);
        visitor.lastVisitAt = Math.round(new Date().getTime()/1000);
        visitor.sessionEndedAt = Math.round(new Date().getTime()/1000) + (30 * 60);

        let cookieValue = visitor.visitorId + "." +
                visitor.sessionId + "." +
                visitor.firstVisitAt + "." +
                visitor.lastVisitAt + "." +
                visitor.sessionEndedAt;

        this.cookieManager.add(new Cookie("_weba", cookieValue));

        model.visitor = visitor;
    }
}
