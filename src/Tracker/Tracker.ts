import { Queue } from "../Queue/Queue";
import { EventHandler } from "../Event/Handler/EventHandler";

export class Tracker {
    public static get SEND_COMMAND(): string { return "send"; }

    constructor(private global: any, private eventHandler: EventHandler) {}

    public run() {
        let dataLayerCallback = this.global;
        let queue = dataLayerCallback.q;
        let push = dataLayerCallback.q.push;

        this.process(new Queue(queue));

        queue.push = (...dataLayerElements) => {
            push.apply(queue, Array.prototype.slice.call(dataLayerElements, 0));
            this.process(new Queue(queue));
        };
    }

    private process(queue: Queue) {
        let dataLayerElementPayload: any = {};
        
        queue.consume((index, dataLayerElement) => {
            if (dataLayerElement.length >= 2) {
                dataLayerElementPayload = Object.assign(dataLayerElementPayload, dataLayerElement[1]);
                
                if (dataLayerElement[0] === Tracker.SEND_COMMAND) {
                    this.global.q.splice(index, 1);
                    this.eventHandler.handle(dataLayerElementPayload);
                }
            }
        });
    }
}
