import { Builder } from "../Builder";
import { Model } from "../Model";
import { Event } from "./Event";
import { Config } from "../../Config/Config";

export class EventBuilder implements Builder {
    constructor(private config: Config) {}

    public build(model: Model, dataLayerElementPayload: any) {

        let event: Event = new Event();
        event.trackerId = this.config.trackerId;
        
        if (dataLayerElementPayload.hasOwnProperty("event")) {
            event.name = dataLayerElementPayload.event;
            delete dataLayerElementPayload.event;
        } else {
            event.name = Event.DEFAULT_EVENT;
        }
        

        model.event = event;
    }
}
