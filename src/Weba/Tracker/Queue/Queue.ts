import {Request} from "./Request";

export interface Queue {
    getSize():number;
    getBytes(): number;
    dequeue(): Request;
    enqueue(request: Request);
}