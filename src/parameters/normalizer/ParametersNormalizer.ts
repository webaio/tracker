import { Parameters } from '../Parameters';
import { NormalizedParameters } from './NormalizedParameters';

export class ParametersNormalizer {
    private normalizedParameters: NormalizedParameters;

    constructor() {
        this.normalizedParameters = new NormalizedParameters();
    }

    normalize(parameters: Parameters): NormalizedParameters {
        this.normalizedParameters.h = parameters.height;
        this.normalizedParameters.w = parameters.width;
        this.normalizedParameters.aw = parameters.availableWidth;
        this.normalizedParameters.ah = parameters.availableHeight;
        this.normalizedParameters.t = parameters.trackerId;
        this.normalizedParameters.e = parameters.event;
        this.normalizedParameters.u = parameters.url;
        this.normalizedParameters.rd = parameters.date;

        return this.normalizedParameters;
    }
}