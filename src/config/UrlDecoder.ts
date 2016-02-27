export class UrlDecoder {
    private url: string;
    
    constructor(url: string) {
        this.url = url;
    }

    getDomain(): string {
        let host: string;
        if (this.url.indexOf('//') > -1) {
            host = this.url.split('/')[2];
        } else {
            host = this.url.split('/')[0];
        }

        return host;
    }

    getParams() {
        let params = this.getQueryParams(this.url),
            result: any = {}, param: any;

        if (!params) {
            return result;
        }

        let pairs = this.splitParams(params);

        for (let i = 0; i < pairs.length; i++) {
            param = pairs[i].split('=');
            result[param[0]] = param[1];
        }

        return result;
    }

    private getQueryParams(src: string) {
        return src.replace(/^[^\?]+\??/, '');
    }

    private splitParams(src: string) {
        return src.split('&');
    }
}