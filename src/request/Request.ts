export interface Request {
    send(url: string, queryString: string, method?: string);
}