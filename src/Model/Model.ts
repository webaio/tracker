import { Device } from "./Device/Device";
import { Content } from "./Content/Content";
import { Event } from "./Event/Event";
import { CustomDimension } from "./CustomDimension/CustomDimension";
import { CustomMetric } from "./CustomMetric/CustomMetric";
import { Visitor } from "./Visitor/Visitor";

export class Model {
    public event: Event;
    public device: Device;
    public content: Content;
    public visitor: Visitor;
    private _customDimensions: Array<CustomDimension> = [];
    private _customMetrics: Array<CustomMetric> = [];

    public addCustomDimension(customDimension: CustomDimension) {
        this._customDimensions.push(customDimension);
    }

    public addCustomMetric(customMetric: CustomMetric) {
        this._customMetrics.push(customMetric);
    }

    get customDimensions(): Array<CustomDimension> {
        return this._customDimensions;
    }

    get customMetrics(): Array<CustomMetric> {
        return this._customMetrics;
    }
}
