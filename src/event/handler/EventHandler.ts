import { ParametersDirector } from '../../parameters/director/ParametersDirector';
import { RequestHandler } from '../../request/handler/RequestHandler';
import { NormalizedParameters } from '../../parameters/normalizer/NormalizedParameters';
import { ParametersNormalizer } from '../../parameters/normalizer/ParametersNormalizer';

export class EventHandler {
    private normalizedParameters: NormalizedParameters;
    private parametersDirector: ParametersDirector;
    private requestHandler: RequestHandler;
    private parametersNormalizer: ParametersNormalizer;

    constructor (parametersDirector: ParametersDirector, requestHandler: RequestHandler, parametersNormalizer: ParametersNormalizer) {
        this.parametersDirector = parametersDirector;
        this.requestHandler = requestHandler;
        this.parametersNormalizer = parametersNormalizer;
    }

    handle (dataLayerElements: Array<any>) {
        let max = dataLayerElements.length;
        for (let index = 0; index < max; index++) {
            this.parametersDirector.buildParameters(dataLayerElements[index]);
            this.normalizedParameters = this.parametersNormalizer.normalize(this.parametersDirector.getParameters());
            this.requestHandler.handle(this.normalizedParameters);
        }
    }
}