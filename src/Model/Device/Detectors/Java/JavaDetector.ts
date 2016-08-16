import { Detector } from "../../Detector";
import { Device } from "../../Device";

const JAVA_ENABLED_PROPERTY = "javaEnabled";

export class JavaDetector implements Detector {
    private navigator: Navigator;

    constructor(navigator: Navigator) {
        this.navigator = navigator;
    }

    public detect(device: Device): void {
        let detected = false;

        if (this.hasJavaEnabledMethod()) {
            detected = this.navigator.javaEnabled();
        }

        device.isJava = detected;
    }

    private hasJavaEnabledMethod(): boolean {
        return this.navigator.hasOwnProperty(JAVA_ENABLED_PROPERTY) && typeof this.navigator[JAVA_ENABLED_PROPERTY] === "function";
    }
}
