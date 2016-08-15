export class UrlDecoder {
    public getDomain(url: string): string {
        return "//" + url.split("/")[2];
    }

    public getParams(url: string): any {
        let params: string = this._getQueryParams(url),
            result: any = {}, param: any;

        if (!params) {
            return result;
        }

        let pairs: Array<string> = this._splitParams(params);

        for (let i = 0; i < pairs.length; i++) {
            param = pairs[i].split("=");
            result[param[0]] = param[1];
        }

        return result;
    }

    private _getQueryParams(src: string): string {
        return src.replace(/^[^\?]+\??/, "");
    }

    private _splitParams(src: string): Array<string> {
        return src.split("&");
    }
}
