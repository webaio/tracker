export class NormalizedParameters {
    public w: number;
    public h: number;
    public aw: number;
    public ah: number;
    public t: string;
    public e: string;
    public u: string;
    public rd: string;
    public d3: boolean;
    public d5: boolean;
    public d11: boolean;
    public d12: boolean;
    public d13: boolean;
    public d14: boolean;

    initEmpty() {
        this.w = 0;
        this.h = 0;
        this.aw = 0;
        this.ah = 0;
        this.t = '';
        this.e = '';
        this.u = '';
        this.rd = '';
        this.d3 = true;
        this.d5 = false;
        this.d11 = false;
        this.d12 = false;
        this.d13 = false;
        this.d14 = false;

        return this;
    }
}