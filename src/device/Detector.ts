import {Device} from './Device';

export interface Detector {
    detect(device: Device): void;
}
