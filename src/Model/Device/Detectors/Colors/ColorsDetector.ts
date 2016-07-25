import { Detector } from "../../Detector";
import { Device } from "../../Device";

export class ColorsDetector implements Detector {
    constructor(private screen: Screen) {}

    public detect(device: Device): void {
        device.colors = this.screen.colorDepth;
    }
}
