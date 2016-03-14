import {Parameters} from '../Parameters';
import {ParametersBuilder} from '../builder/ParametersBuilder';
export class ParametersDirector {
    private parametersBuilder: ParametersBuilder;

    constructor(parametersBuilder: ParametersBuilder) {
        this.parametersBuilder = parametersBuilder;
    }

    buildParameters(dataLayerElement: Object) {
        this.parametersBuilder.buildDevice();
        this.parametersBuilder.buildTrackerId();
        this.parametersBuilder.buildEvent(dataLayerElement);
        this.parametersBuilder.buildDate(dataLayerElement);
        this.parametersBuilder.buildUrl();
    }

    getParameters(): Parameters {
        return this.parametersBuilder.getParameters();
    }
}