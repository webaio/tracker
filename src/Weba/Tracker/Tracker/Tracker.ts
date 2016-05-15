export interface Tracker {
    set(name:string, value:any):void;
    get(name: string): any;
    track(event:string, payload?:{ [s:string]:any; }):void;
    send(options?:{ [s:string]:any; }):void;
}