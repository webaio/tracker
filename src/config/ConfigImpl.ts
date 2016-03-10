/// <reference path='./../../typings/main.d.ts' />
import { Config } from './Config';
import { UrlDecoder } from './UrlDecoder';

export class ConfigImpl implements Config {
    public domain: String;
    public trackerId: String;

    read (scriptElement: HTMLScriptElement) {
        let decoder = new UrlDecoder(scriptElement.src),
            params: any = decoder.getParams();

        this.domain = decoder.getDomain();
        this.trackerId = params.trackerId;
    }
}