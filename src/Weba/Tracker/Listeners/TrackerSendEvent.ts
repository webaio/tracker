import {Event} from "../EventDispatcher/Event";
import {Queue} from "../Queue/Queue";
import {Transport} from "../Transport/Transport";
import {XhrTransport} from "../Transport/XhrTransport";

export class TrackerSendEvent extends Event{
    config:{ [s:string]:any; };
    options:{ [s:string]:any; };
    queue: Queue;
    transport: Transport = new XhrTransport();

    constructor(config:{}, queue:Queue, options:{ [s:string]:any; }) {
        super();
        this.options = options;
        this.config = config;
        this.queue = queue;
    }
}

