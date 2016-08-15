import { Detector } from "../../Detector";
import { Device } from "../../Device";

export class LanguageDetector implements Detector {
    constructor(private navigator: Navigator) {}

    public detect(device: Device) {
        device.language = this.navigator.userLanguage || this.navigator.language;
    }
}
