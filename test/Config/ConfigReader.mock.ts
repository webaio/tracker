export let urlDecoder = {
    getParams: (url) => {
        let result = [];
        result["t"] = "TRACKER-001";
        result["g"] = "global";

        return result;
    },

    getDomain: (url) => {
        return "//localhost";
    }
};

export let htmlElement = {
    src: "//localhost/index.js?t=TRACKER-001&g=g"
};
