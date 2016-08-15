export let global = {
    g: undefined
};

global["g"] = global["g"] || function () {
        (global["g"].q = global["g"].q || []).push(arguments);
    };

export let eventHandler = {
    handle: (arg) => {

    }
};
