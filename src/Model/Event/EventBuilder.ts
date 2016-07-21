import { Builder } from "../Builder";
import { Model } from "../Model";
import { Event } from "./Event";

export class EventBuilder implements Builder {
    public  build(model: Model, dataLayerElementPayload: any) {

        let event: Event = new Event();

        if (dataLayerElementPayload.hasOwnProperty("event")) {
            event.name = dataLayerElementPayload.event;
            delete dataLayerElementPayload.event;
        } else {
            event.name = Event.DEFAULT_EVENT;
        }

        model.event = event;
    }
}
