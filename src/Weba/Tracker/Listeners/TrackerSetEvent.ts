import {Event} from "../EventDispatcher/Event";

export class TrackerSetEvent extends Event{
    name: string;
    value: any;
    config:{ [s:string]:any; };

    constructor(name:string, value:any, config:{}) {
        super();
        this.name = name;
        this.value = value;
        this.config = config;
    }
}

