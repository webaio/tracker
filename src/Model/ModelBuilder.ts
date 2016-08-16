import { Model } from "./Model";
import { Builder } from "./Builder";

export class ModelBuilder implements Builder {
    private builders: Array<Builder> = [];

    public addBuilder(builder: Builder) {
        this.builders.push(builder);
    }

    public build(model: Model, dataLayerElementPayload: any) {
        for (let builder of this.builders) {
            builder.build(model, dataLayerElementPayload);
        }
    }
}
