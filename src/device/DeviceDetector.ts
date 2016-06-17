import {Detector} from './Detector';
import {Device} from './Device';

export class DeviceDetector implements Detector {
    private detectors: Array<Detector> = [];
    private device: Device;

    public addDetector(detector: Detector): void {
        this.detectors.push(detector);
    }

    public detect(device: Device): void {
        for (let detector of this.detectors) {
            detector.detect(device);
        }

        this.device = device;
    }

    public getDevice(): Device {
        return this.device;
    }
}
