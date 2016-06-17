import { ParametersBuilder } from './ParametersBuilder';
import { Parameters } from '../Parameters';
import { Config } from '../../config/Config';
import {DeviceDetector} from '../../device/DeviceDetector';

export class ParametersBuilderImpl implements ParametersBuilder {
    private parameters: Parameters;
    private config: Config;
    private global: Window;
    private deviceDetector: DeviceDetector;

    constructor(config: Config, global: any, deviceDetector: DeviceDetector) {
        this.config = config;
        this.global = global;
        this.deviceDetector = deviceDetector;
    }

    buildDevice () {
        this.parameters = <Parameters>this.deviceDetector.getDevice();
    }

    buildTrackerId() {
        this.parameters.trackerId = this.config.trackerId;
    }

    buildUrl() {
        this.parameters.url = encodeURIComponent(this.global.location.href);
    }

    buildEvent(dataLayerElement: Object) {
        this.parameters.event = dataLayerElement['event'];
    }

    buildDate(dataLayerElement: Object) {
        this.parameters.date = encodeURIComponent(dataLayerElement['date']);
    }

    getParameters(): Parameters {
        return this.parameters;
    }
}
