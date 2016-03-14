export class NormalizedParameters {
    public w: number;
    public h: number;
    public aw: number;
    public ah: number;
    public t: string;
    public e: string;
    public u: string;
    public rd: string;

    initEmpty() {
        this.w = 0;
        this.h = 0;
        this.aw = 0;
        this.ah = 0;
        this.t = '';
        this.e = '';
        this.u = '';
        this.rd = '';

        return this;
    }
}