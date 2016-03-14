import { NormalizedParameters } from '../../parameters/normalizer/NormalizedParameters';
import {QueryStringBuilder} from '../../queryString/builder/QueryStringBuilder';
import {Config} from '../../config/Config';
import {Request} from '../Request';

export class RequestHandler {
    private queryStringBuilder: QueryStringBuilder;
    private config: Config;
    private request: Request;

    constructor (queryStringBuilder: QueryStringBuilder, config: Config, request: Request) {
        this.queryStringBuilder = queryStringBuilder;
        this.config = config;
        this.request = request;
    }

    handle (parameters: NormalizedParameters) {
        this.queryStringBuilder.buildQueryString(parameters);

        this.request.send(this.config.domain, this.queryStringBuilder.getQueryString());
    }
}