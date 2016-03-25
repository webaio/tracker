export class NormalizedParameters {
    public w: number;
    public h: number;
    public aw: number;
    public ah: number;
    public t: string;
    public e: string;
    public u: string;
    public rd: string;
    public d11: boolean;
    public d12: boolean;

    initEmpty() {
        this.w = 0;
        this.h = 0;
        this.aw = 0;
        this.ah = 0;
        this.t = '';
        this.e = '';
        this.u = '';
        this.rd = '';
        this.d11 = false;
        this.d12 = false;

        return this;
    }
}