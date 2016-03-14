import { ParametersBuilder } from './ParametersBuilder';
import { Parameters } from '../Parameters';
import { Config } from '../../config/Config';
import { DeviceDirector } from '../../device/director/DeviceDirector';

export class ParametersBuilderImpl implements ParametersBuilder {
    private parameters: Parameters;
    private config: Config;
    private global: Window;
    private deviceDirector: DeviceDirector;

    constructor(config: Config, global: any, deviceDirector: DeviceDirector) {
        this.config = config;
        this.global = global;
        this.deviceDirector = deviceDirector;
    }

    buildDevice () {
        this.deviceDirector.buildDevice();
        this.parameters = <Parameters>this.deviceDirector.getDevice();
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
