import {Event} from "../EventDispatcher/Event";
import {Queue} from "../Queue/Queue";

export class TrackerTrackEvent extends Event{
    eventName: string;
    eventPayload:{ [s:string]:any; };
    config:{ [s:string]:any; };
    queue: Queue;

    constructor(eventName:string, eventPayload:{}, config:{}, queue:Queue) {
        super();
        this.eventName = eventName;
        this.eventPayload = eventPayload;
        this.config = config;
        this.queue = queue;
    }
}

