import {Event} from "../EventDispatcher/Event";
import {Tracker} from "../Tracker/Tracker";

export class DataLayerPushEvent extends Event{
    private _dataLayerElements: any;
    private _tracker: Tracker;

    constructor(dataLayerElements:any, tracker:Tracker) {
        super();
        this._dataLayerElements = dataLayerElements;
        this._tracker = tracker;
    }

    get dataLayerElements():any {
        return this._dataLayerElements;
    }

    get tracker():Tracker {
        return this._tracker;
    }
}
