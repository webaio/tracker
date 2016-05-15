///<reference path="../../../../typings/main.d.ts" />

import { expect } from 'chai';
import {EventDispatcherImpl} from "../../../../src/Weba/Tracker/EventDispatcher/EventDispatcherImpl";
import {Events} from "../../../../src/Weba/Tracker/EventDispatcher/Events";

describe('EventDispatcherImpl', () => {
    it('should add listener by priority', (done) => {
        let eventDispatcher = new EventDispatcherImpl();
        let listener1 = function() {};
        let listener2 = function() {};
        let listener3 = function() {};
        let listener4 = function() {};

        eventDispatcher.addListener(Events.DATALAYER_PUSH, listener1, 255);
        eventDispatcher.addListener(Events.DATALAYER_PUSH, listener2, -255);
        eventDispatcher.addListener(Events.DATALAYER_PUSH, listener3, -255);
        eventDispatcher.addListener(Events.DATALAYER_PUSH, listener4, 0);

        let listeners = eventDispatcher.getListeners(Events.DATALAYER_PUSH);

        expect(listeners.length).to.equal(4);
        expect(listeners[0]).to.equal(listener1);
        expect(listeners[1]).to.equal(listener4);
        expect(listeners[2]).to.equal(listener2);
        expect(listeners[3]).to.equal(listener3);

        done();
    });

    it('listeners should be removed', (done) => {
        let eventDispatcher = new EventDispatcherImpl();
        let listener1 = function() {};
        let listener2 = function() {};

        eventDispatcher.addListener(Events.DATALAYER_PUSH, listener1, 255);
        eventDispatcher.addListener(Events.DATALAYER_PUSH, listener1, 1);
        eventDispatcher.addListener(Events.DATALAYER_PUSH, listener2, -255);

        expect(eventDispatcher.getListeners(Events.DATALAYER_PUSH).length).to.equal(3);

        eventDispatcher.removeListener(Events.DATALAYER_PUSH, listener1);

        expect(eventDispatcher.getListeners(Events.DATALAYER_PUSH).length).to.equal(1);

        done();
    });

    it('listeners should be returned by event name', (done) => {
        let eventDispatcher = new EventDispatcherImpl();

        eventDispatcher.addListener(Events.DATALAYER_PUSH, function() {}, 255);
        eventDispatcher.addListener(Events.DATALAYER_PUSH, function() {}, 0);
        eventDispatcher.addListener(Events.TRACKER_SEND, function() {}, -255);

        expect(eventDispatcher.getListeners(Events.DATALAYER_PUSH).length).to.equal(2);
        expect(eventDispatcher.getListeners(Events.TRACKER_SEND).length).to.equal(1);

        done();
    });
});
