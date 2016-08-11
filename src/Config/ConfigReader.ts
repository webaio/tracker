import { Config } from "./Config";
import { UrlDecoder } from "../Common/UrlDecoder";

export class ConfigReader {
    constructor(private urlDecoder: UrlDecoder) {}

    public read(scriptElement: HTMLScriptElement): Config {
        let config: Config = new Config();
        let urlParams: any = this.urlDecoder.getParams(scriptElement.src);
        config.trackerId = urlParams.t;
        config.domain = this.urlDecoder.getDomain(scriptElement.src);
        config.globalFunctionName = urlParams.g;

        return config;
    }
}
