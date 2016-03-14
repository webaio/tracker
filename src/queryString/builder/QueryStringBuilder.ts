import {NormalizedParameters} from '../../parameters/normalizer/NormalizedParameters';

export class QueryStringBuilder {
    private queryString: string;

    buildQueryString(parameters: NormalizedParameters) {
        let baseParametersElement = new NormalizedParameters().initEmpty();
        let parts = [];
        for (let i in parameters) {
            if (parameters.hasOwnProperty(i) && baseParametersElement.hasOwnProperty(i)) {
                parts.push(encodeURIComponent(i) + '=' + encodeURIComponent(parameters[i]));
            }
        }
        this.queryString = parts.join('&');
    }

    getQueryString() {
        return this.queryString;
    }
}