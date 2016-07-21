export class Event {
    public static get DEFAULT_EVENT(): string { return "pageView"; }
    public name: string;
    public date: Date;
}