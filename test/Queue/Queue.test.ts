///<reference path="../../typings/main.d.ts" />

import { Queue } from "../../src/Queue/Queue";

describe("Queue", () => {
    it("consumes messages from queue", (done) => {
        let elements = [];
        elements.push("set", {
            title: "test"
        });
        elements.push("send", {
            event: "pageView"
        });

        let queue = new Queue(elements);

        queue.consume((index) => {
            if (index + 1 === elements.length) {
                done();
            }
        });
    });

    it("works for empty queue", (done) => {
        new Queue();
        done();
    });
});
