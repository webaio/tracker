import { Detector } from "../../Detector";
import { Device } from "../../Device";

export class EncodingDetector implements Detector {
    constructor(private document: Document) {}

    public detect(device: Device): void {
        device.encoding = this.document.defaultCharset || document.charset ||
            document.inputEncoding || document.characterSet;
    }
}
