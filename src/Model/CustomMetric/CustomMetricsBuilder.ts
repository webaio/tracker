import { Builder } from "../Builder";
import { Model } from "../Model";
import { CustomMetric } from "./CustomMetric";

export class CustomMetricsBuilder implements Builder {
    build(model: Model, dataLayerElementPayload: any) {
        let pattern = new RegExp("metric([1-9][0-9]?$|^100)");

        for (let field in dataLayerElementPayload) {
            if (dataLayerElementPayload.hasOwnProperty(field) && pattern.test(field)) {
                let customMetric = new CustomMetric(Number(field.replace("metric", "")), dataLayerElementPayload[field]);
                model.addCustomMetric(customMetric);
            }
        }
    }
}
