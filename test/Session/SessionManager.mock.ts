import { Visitor } from "../../src/Session/Visitor";
import { Session } from "../../src/Session/Session";

export let sessionCookieStorageWithoutCurrentSession = {
    find: () => {
        return null;
    },

    insert: (object) => {

    }
};

export let visitorCookieStorageWithoutCurrentVisitor = {
    find: () => {
        return null;
    },

    insert: (object) => {

    }
};

export let sessionCookieStorageExistingSession = {
    find: () => {
        return Session.getExistingSession("ac1a112e-16cd-4eae-8cdf-df33a122d132", 1451606400, 1453406400);
    },

    insert: (object) => {

    }
};

export let visitorCookieStorageWithExisitingVisitor = {
    find: () => {
        return Visitor.getCurrentVisitor("ac1a112e-16cd-4eae-8cdf-df33a122d131", 1451606400, 1451606400);
    },

    insert: (object) => {

    }
};