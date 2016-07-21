import { Model } from "../Model";
import { DeviceDetector } from "./DeviceDetector";
import { Device } from "./Device";
import { Builder } from "../Builder";

export class DeviceBuilder implements Builder {
    constructor(private deviceDetector: DeviceDetector) {}

    build(model: Model, dataLayerElementPayload: any) {
        let device = new Device();
        this.deviceDetector.detect(device);
        model.device = device;
    }
}
