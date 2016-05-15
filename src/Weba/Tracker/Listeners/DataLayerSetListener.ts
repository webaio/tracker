import {DataLayerPushEvent} from "./DataLayerPushEvent";

const WEBA_TRACKER_SET = 'weba:tracker:set';

export function DataLayerSetListener(event:DataLayerPushEvent, eventName:string) {
    for (var dataLayerElement of event.dataLayerElements) {
        if (dataLayerElement.event == WEBA_TRACKER_SET) {
            let config = {};
            for (var element in dataLayerElement) {
                if (element !== 'event') {
                    config[element] = dataLayerElement[element];
                }
            }

            if (dataLayerElement.config && typeof dataLayerElement.config === 'object') {
                config = dataLayerElement.config;
            }

            for (var name in config) {
                event.tracker.set(name, config[name])
            }
        }
    }
}
