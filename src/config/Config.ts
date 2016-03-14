export interface Config {
    domain: string;
    trackerId: string;
    read(scriptElement: HTMLScriptElement);
}