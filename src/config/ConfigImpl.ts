import { Config } from './Config';
import { UrlDecoder } from './UrlDecoder';

export class ConfigImpl implements Config {
    public domain: string;
    public trackerId: string;
    private element: HTMLScriptElement;

    constructor (element) {
        this.element = element;
        this.read();
    }

    read () {
        let decoder: UrlDecoder,
            params: any;

        decoder = new UrlDecoder(this.element.src);
        params = decoder.getParams();

        this.domain = decoder.getDomain();
        this.trackerId = params.trackerId;
    }
}