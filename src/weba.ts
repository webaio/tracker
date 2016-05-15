'use strict';

import {EventDispatcherImpl} from './Weba/Tracker/EventDispatcher/EventDispatcherImpl';
import {WebTrackerImpl} from "./Weba/Tracker/Tracker/WebTrackerImpl";
import {Events} from "./Weba/Tracker/EventDispatcher/Events";
import {DataLayerPushEvent} from "./Weba/Tracker/Listeners/DataLayerPushEvent";
import {QueueImpl} from "./Weba/Tracker/Queue/QueueImpl";
import {Tracker} from "./Weba/Tracker/Tracker/Tracker";
import {DataLayerTrackListener} from "./Weba/Tracker/Listeners/DataLayerTrackListener";
import {DataLayerSetListener} from "./Weba/Tracker/Listeners/DataLayerSetListener";
import {DataLayerSendListener} from "./Weba/Tracker/Listeners/DataLayerSendListener";

let global:any = window;
global.dataLayer = global.dataLayer || [];

const MAX_DATALAYER_SIZE:number = 300;

let push = global.dataLayer.push,
    dataLayer:Array<any> = [],
    eventDispatcher:EventDispatcherImpl = new EventDispatcherImpl(),
    queue:QueueImpl = new QueueImpl(),
    tracker:Tracker = new WebTrackerImpl(eventDispatcher, queue);

eventDispatcher.addListener(Events.DATALAYER_PUSH, DataLayerSetListener);
eventDispatcher.addListener(Events.DATALAYER_PUSH, DataLayerTrackListener);
eventDispatcher.addListener(Events.DATALAYER_PUSH, DataLayerSendListener);

global.dataLayer.push = (...dataLayerElements) => {
    push.apply(global.dataLayer, Array.prototype.slice.call(dataLayerElements, 0));

    for (dataLayer.push.apply(dataLayer, dataLayerElements); global.dataLayer.length > MAX_DATALAYER_SIZE;) {
        global.dataLayer.shift();
    }

    eventDispatcher.dispatch(Events.DATALAYER_PUSH, new DataLayerPushEvent(dataLayerElements, tracker));
};

module.exports = {
    'tracker': tracker
};