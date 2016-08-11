import { Builder } from "../Builder";
import { Model } from "../Model";
import { CustomDimension } from "./CustomDimension";

export class CustomDimensionsBuilder implements Builder {
    build(model: Model, dataLayerElementPayload: any) {
        let pattern: RegExp = new RegExp("dimension([1-9][0-9]?$|^100)");

        for (let field in dataLayerElementPayload) {
            if (dataLayerElementPayload.hasOwnProperty(field) && pattern.test(field)) {
                let customDimension: CustomDimension = new CustomDimension(
                    Number(field.replace("dimension", "")),
                    dataLayerElementPayload[field]
                );
                model.addCustomDimension(customDimension);
            }
        }
    }
}
