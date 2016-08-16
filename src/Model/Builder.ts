import { Model } from "./Model";

export interface Builder {
    build(model: Model, dataLayerElementPayload: any);
}
