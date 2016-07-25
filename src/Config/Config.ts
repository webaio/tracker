export class Config {
    public domain: string;
    public trackerId: string;
    public globalFunctionName: string;
    public sessionCookieName: string = "_weba_session";
    public visitorCookieName: string = "_weba_visitor";
    public sessionLifetimeInSeconds: number = 1800;
    public visitorLifetimeInSeconds: number = 31104000;
}
