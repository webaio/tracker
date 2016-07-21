import { Normalizer } from "./Normalizer";
import { Model } from "../Model/Model";
import { CustomDimension } from "../Model/CustomDimension/CustomDimension";
import { CustomMetric } from "../Model/CustomMetric/CustomMetric";

export class ModelNormalizer implements Normalizer {
    public normalize(model: Model): Object {
        let normalizedObject = {
            d1: Number(model.device.width) + "x" + Number(model.device.height),
            d2: Number(model.device.availableWidth) + "x" + Number(model.device.availableHeight),
            d3: Number(model.device.isLocalStorage),
            d4: Number(model.device.isSessionStorage),
            d5: Number(model.device.isAdBlock),
            d6: Number(model.device.isJavascript),
            d7: Number(model.device.isPdf),
            d8: Number(model.device.isCanvas),
            d9: Number(model.device.isFlash),
            d10: Number(model.device.isSilverlight),
            d11: Number(model.device.isCookie),
            d12: Number(model.device.isTouch),
            d13: Number(model.device.isQuickTime),
            d14: Number(model.device.isJava),
            d15: Number(model.device.isRealPlayer),
            e: model.event.name
        };

        if (model.content.location) {
            normalizedObject["dl"] = model.content.location;
        }

        if (model.content.host) {
            normalizedObject["dh"] = model.content.host;
        }

        if (model.content.path) {
            normalizedObject["dp"] = model.content.path;
        }

        if (model.content.title) {
            normalizedObject["dt"] = model.content.title;
        }

        for (; model.customDimensions.length > 0; ) {
            let customDimension: CustomDimension = model.customDimensions.shift();
            normalizedObject["cd[" + customDimension.index + "]"] = customDimension.value;
        }

        for (; model.customMetrics.length > 0; ) {
            let customMetric: CustomMetric = model.customMetrics.shift();
            normalizedObject["cm[" + customMetric.index + "]"] = customMetric.value;
        }

        return normalizedObject;
    }
}
