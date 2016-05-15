import {Tracker} from "./Tracker";
import {EventDispatcher} from "../EventDispatcher/EventDispatcher";
import {Events} from "../EventDispatcher/Events";
import {TrackerSetEvent} from "../Listeners/TrackerSetEvent";
import {Queue} from "../Queue/Queue";
import {TrackerTrackEvent} from "../Listeners/TrackerTrackEvent";
import {TrackerSendEvent} from "../Listeners/TrackerSendEvent";

export class WebTrackerImpl implements Tracker {
    private config:{ [s:string]:any; } = {};
    private eventDispatcher: EventDispatcher;
    private queue: Queue;
    
    constructor(eventDispatcher:EventDispatcher, queue:Queue) {
        this.eventDispatcher = eventDispatcher;
        this.queue = queue;
    }

    set(name:string, value:any):void {
        let e:TrackerSetEvent = new TrackerSetEvent(name, value, this.config);
        this.eventDispatcher.dispatch(Events.TRACKER_SET, e);

        this.config = e.config;
    }

    get(name:string):any {
        return this.config[name];
    }

    track(event:string, payload?:{ [s:string]:any; }):void {
        let e:TrackerTrackEvent = new TrackerTrackEvent(event, payload, this.config, this.queue);
        this.eventDispatcher.dispatch(Events.TRACKER_TRACK, e);

        this.queue = e.queue;
    }

    send(options?:{ [s:string]:any; }):void {
        let e:TrackerSendEvent = new TrackerSendEvent(this.config, this.queue, options);
        this.eventDispatcher.dispatch(Events.TRACKER_SEND, e);

        e.transport.transport(this.queue, options);
    }
}