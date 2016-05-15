import {Queue} from "../Queue/Queue";

export interface Transport {
    transport(queue: Queue, options?:{ [s:string]:any; } ):void;
}