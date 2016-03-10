export class UrlDecoder {
    private url: string;

    constructor(url: string) {
        this.url = url;
    }

    getDomain(): string {
        let domain: string;
        if (this.url.indexOf('//') > -1) {
            domain = this.url.split('/')[2];
        } else {
            domain = this.url.split('/')[0];
        }

        return domain;
    }

    getParams(): any {
        let params: string = this.getQueryParams(this.url),
            result: any = {}, param: any;

        if (!params) {
            return result;
        }

        let pairs: Array<string> = this.splitParams(params);

        for (let i = 0; i < pairs.length; i++) {
            param = pairs[i].split('=');
            result[param[0]] = param[1];
        }

        return result;
    }

    private getQueryParams(src: string): string {
        return src.replace(/^[^\?]+\??/, '');
    }

    private splitParams(src: string): Array<string> {
        return src.split('&');
    }
}