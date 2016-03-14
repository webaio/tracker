import {Request} from '../Request';

export class Pixel implements Request {
    send (domain: string, queryString: string, method?: string) {
        let img = new Image();
        img.src = domain + '?' + queryString;
    }
}