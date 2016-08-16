export let detector1 = {
    detect: (device) => {
        device.isAdBlock = true;
    }
};

export let detector2 = {
    detect: (device) => {
        device.isCookie = false;
    }
};
