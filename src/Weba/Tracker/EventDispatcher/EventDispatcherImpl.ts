import { EventDispatcher } from './EventDispatcher';
import { Event } from './Event';

export class EventDispatcherImpl implements EventDispatcher {
    private listeners = {};

    dispatch(eventName:string, event:Event):void {
        this.ensureListenersForEventName(eventName);
        
        if (typeof event === 'undefined') {
            event = new Event();
        }

        let sortedListeners = this.getListeners(eventName);
        for (var index = 0; index < sortedListeners.length; index++) {
            if(event.isPropagationStopped()) {
                return;
            }
            
            let listener = sortedListeners[index];
            listener.call(listener, event, eventName);
        }
    }

    addListener(eventName:string, listener:any, priority?:number):void {
        this.ensureListenersForEventName(eventName);

        if (typeof priority === 'undefined') {
            priority = 0;
        }

        this.listeners[eventName].push({'priority': +priority, 'listener': listener});
    }

    removeListener(eventName:string, listener:any):void {
        if (typeof this.listeners[eventName] === 'undefined') {
            this.listeners[eventName] = [];
        }

        let newListeners = [];
        for (var index = 0; index < this.listeners[eventName].length; index++) {
            if (listener !== this.listeners[eventName][index].listener) {
                newListeners.push(this.listeners[eventName][index]);
            }
        }

        this.listeners[eventName] = newListeners;
    }

    getListeners(eventName:string):Array<any> {
        this.ensureListenersForEventName(eventName);

        let sorted = [];

        this.listeners[eventName].sort(function (a, b) {
            return b.priority - a.priority;
        });

        for (var i = 0; i < this.listeners[eventName].length; i++) {
            sorted.push(this.listeners[eventName][i].listener);
        }

        return sorted;
    }

    private ensureListenersForEventName(eventName:string) {
        if (typeof this.listeners[eventName] === 'undefined') {
            this.listeners[eventName] = [];
        }
    }
}