import {DataLayerPushEvent} from "./DataLayerPushEvent";

const WEBA_TRACKER_SEND = 'weba:tracker:send';

export function DataLayerSendListener(event:DataLayerPushEvent, eventName:string) {
    for (var dataLayerElement of event.dataLayerElements) {
        if (dataLayerElement.event == WEBA_TRACKER_SEND) {
            let options = {};
            for (var element in dataLayerElement) {
                if (element !== 'event') {
                    options[element] = dataLayerElement[element];
                }
            }

            if (dataLayerElement.options && typeof dataLayerElement.options === 'object') {
                options = dataLayerElement.options;
            }

            event.tracker.send(options)
        }
    }
}
