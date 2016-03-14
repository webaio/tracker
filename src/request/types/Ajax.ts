import {Request} from '../Request';

const MAX_URL_LENGTH = 2040;

export class Ajax implements Request {
    send (domain: string, queryString: string, method?: string) {
        let http = new XMLHttpRequest();

        http.onreadystatechange = () => {
            if (http.readyState === 4 && http.status === 404) {
                console.log('pixel fallback, todo');
            }
        };

        if (this.totalLengthOfUrl(domain, queryString) < MAX_URL_LENGTH) {
            this.getRequest(http, domain, queryString);
        } else {
            this.setRequest(http, domain, queryString);
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

    private totalLengthOfUrl (domain, queryString) {
        return domain.length + queryString.length;
    }
}