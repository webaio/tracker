import {Event} from "./Event";

export interface EventDispatcher {
    dispatch(eventName:string, event: Event):void;
    addListener(eventName:string, listener: any, priority?: number):void;
    removeListener(eventName:string, listener: any):void;
    getListeners(eventName:string):Array<any>;
}
