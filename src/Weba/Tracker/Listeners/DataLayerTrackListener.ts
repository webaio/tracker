import {DataLayerPushEvent} from "./DataLayerPushEvent";

const WEBA_TRACKER_PAGEVIEW = 'weba:tracker:pageview';

var trackerEvents:Array<String> = [
    WEBA_TRACKER_PAGEVIEW
];

export function DataLayerTrackListener(event:DataLayerPushEvent, eventName:string) {
    for (var dataLayerElement of event.dataLayerElements) {
        if (dataLayerElement.event && trackerEvents.indexOf(dataLayerElement.event) != -1) {
            event.tracker.track(dataLayerElement.event, dataLayerElement.payload ? dataLayerElement.payload : {});
        }
    }
}
