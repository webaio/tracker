export let urlDecoder = {
    getParams: (url) => {
        let result = [];
        result["t"] = "WEBA-001";
        result["g"] = "weba";

        return result;
    },

    getDomain: (url) => {
        return "//localhost";
    }
};

export let htmlElement = {
    src: "//localhost/weba.js?t=WEBA-01&g=g"
};
