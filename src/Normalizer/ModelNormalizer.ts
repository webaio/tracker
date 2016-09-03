import { Normalizer } from "./Normalizer";
import { Model } from "../Model/Model";
import { CustomDimension } from "../Model/CustomDimension/CustomDimension";
import { CustomMetric } from "../Model/CustomMetric/CustomMetric";
import { Visitor } from "../Model/Visitor/Visitor";

export class ModelNormalizer implements Normalizer {
    public normalize(model: Model): any {
        let normalizedObject = {
            e: this.getEventName(model),
            l: this.getLanguage(model),
            t: this.getTrackerId(model),
            de: this.getDocumentEncoding(model),
            sr: this.getDeviceWidthAndHeight(model),
            sv: this.getDeviceAvailableWidthAndHeight(model),
            cd: this.getColorDepth(model),
            di: this.getDeviceHexInfo(model),
            dl: this.getDocumentLocation(model),
            dh: this.getDocumentHost(model),
            dp: this.getDocumentPath(model),
            dt: this.getDocumentTitle(model),
            cb: this.getCacheBuster(),
            vid: this.getVisitorId(model),
            sid: this.getSessionId(model),
            st: this.getSessionTime(model)
        };

        this.setCustomDimension(normalizedObject, model);
        this.setCustomMetrics(normalizedObject, model);

        return normalizedObject;
    }

    private getDeviceHexInfo(model: Model): string {
        let di = "1" + Number(model.device.isLocalStorage) + Number(model.device.isSessionStorage)
            + Number(model.device.isAdBlock) + Number(model.device.isJavascript) + Number(model.device.isPdf)
            + Number(model.device.isCanvas) + Number(model.device.isFlash) + Number(model.device.isSilverlight)
            + Number(model.device.isCookie) + Number(model.device.isTouch) + Number(model.device.isQuickTime)
            + Number(model.device.isJava) + Number(model.device.isRealPlayer);

        return parseInt(di, 2).toString(16);
    }

    private getDeviceWidthAndHeight(model: Model): string {
        return Number(model.device.width) + "x" + Number(model.device.height);
    }

    private getDeviceAvailableWidthAndHeight(model: Model): string {
        return Number(model.device.availableWidth) + "x" + Number(model.device.availableHeight);
    }

    private getEventName(model: Model): string {
        return model.event.name;
    }
    
    private getDocumentLocation(model: Model): string {
        return model.content.location;
    }

    private getDocumentHost(model: Model): string {
        return model.content.host;
    }

    private getDocumentPath(model: Model): string {
        return model.content.path;
    }

    private getDocumentTitle(model: Model): string {
        return model.content.title;
    }

    private getDocumentEncoding(model: Model): string {
        return model.device.encoding;
    }

    private getColorDepth(model: Model): number {
        return model.device.colors;
    }

    private getLanguage(model: Model): string {
        return model.device.language;
    }

    private getTrackerId(model: Model): string {
        return model.event.trackerId;
    }

    private getVisitorId(model: Model): string {
        return model.visitor.visitorId;
    }

    private getSessionId(model: Model): string {
        return model.visitor.sessionId;
    }

    private getSessionTime(model: Model): string {
        let visitor: Visitor = model.visitor;

        return visitor.firstVisitAt + "." + visitor.sessionStartedAt + "." + visitor.sessionEndedAt + "."
            + visitor.currentVisitAt;
    }

    private getCacheBuster(): string {
        return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 10);
    }

    private setCustomDimension(normalizedObject: any, model: Model) {
        for (; model.customDimensions.length > 0; ) {
            let customDimension: CustomDimension = model.customDimensions.shift();
            normalizedObject["cd[" + customDimension.index + "]"] = customDimension.value;
        }
    }

    private setCustomMetrics(normalizedObject: any, model: Model) {
        for (; model.customMetrics.length > 0; ) {
            let customMetric: CustomMetric = model.customMetrics.shift();
            normalizedObject["cm[" + customMetric.index + "]"] = customMetric.value;
        }
    }
}
