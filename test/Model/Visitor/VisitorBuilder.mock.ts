import {SessionAggregate} from "../../../src/Session/SessionAggregate";

export let sessionManager = {
    handle: () => {
        return SessionAggregate.createNewSessionAndVisitor();
    }
};
