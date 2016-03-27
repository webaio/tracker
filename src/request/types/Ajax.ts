import { Request } from '../Request';

const MAX_URL_LENGTH = 2040;

export class Ajax implements Request {
    send (domain: string, queryString: string, method?: string) {
        let http;
        if (XMLHttpRequest instanceof Function) {
            http = new XMLHttpRequest();
        } else {
            http = new ActiveXObject('Microsoft.XMLHTTP');
        }

        if (http) {
            http.onreadystatechange = () => {
                if (http.readyState === 4 && http.status === 404) {
                    console.log('offline tracking');
                }
            };

            if (this.totalLengthOfUrl(domain, queryString) < MAX_URL_LENGTH) {
                this.getRequest(http, domain, queryString);
            } else {
                this.setRequest(http, domain, queryString);
            }
        } else {
            this.pixel(domain, queryString);
        }
    }

    private getRequest (http, domain, queryString) {
        http.open('GET', domain + '?' + queryString, true);
        http.send(undefined);
    }

    private setRequest (http, domain, queryString) {
        http.open('SET', domain, true);
        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        http.send(queryString);
    }

    private pixel (domain, queryString) {
        let pixel = new Image();
        pixel.src = domain + '?' + queryString;
    }

    private totalLengthOfUrl (domain, queryString) {
        return domain.length + queryString.length;
    }
}