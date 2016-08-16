import { Config } from "./Config";
import { UrlDecoder } from "../Common/UrlDecoder";

export class ConfigReader {
    constructor(private urlDecoder: UrlDecoder) {}

    public read(scriptElement: HTMLScriptElement): Config {
        let config: Config = new Config();
        let urlParams: any = this.urlDecoder.getParams(scriptElement.src);
        
        if (urlParams.hasOwnProperty("t") && urlParams.hasOwnProperty("g")) {
            config.trackerId = urlParams.t;
            config.globalFunctionName = urlParams.g;
        }

        config.domain = this.urlDecoder.getDomain(scriptElement.src);

        return config;
    }
}
