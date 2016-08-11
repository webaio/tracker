export class Config {
    public domain: string;
    public trackerId: string;
    public globalFunctionName: string;
    public sessionCookieName: string = "_w_session";
    public visitorCookieName: string = "_w_visitor";
    public sessionLifetimeInSeconds: number = 1800;
    public visitorLifetimeInSeconds: number = 31104000;
}
