import { UrlDecoder } from './UrlDecoder';
import { Config } from './Config';

export class ConfigReader {
    private scriptElement: any;

    constructor (scriptElement: any) {
        this.scriptElement = scriptElement;
    }

    read (): Config {
        let decoder = new UrlDecoder(this.scriptElement.src),
            params: Config = decoder.getParams();

        return {
            domain: decoder.getDomain(),
            dataLayer: params.dataLayer || 'dataLayer',
            trackerId: params.trackerId
        };
    }
}