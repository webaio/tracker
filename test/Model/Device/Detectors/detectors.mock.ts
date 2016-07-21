export let windowMock = {
    screen: {
        width: 1,
        height: 2
    },
    document: {
        documentElement: {
            clientWidth: 3,
            clientHeight: 4
        }
    }
};

export let storageProper = {
    setItem: () => {},
    removeItem: () => {}
};


export let baitValid = {
    setAttribute: () => {},
    getPropertyValue: () => "hidden"
};

export let baitInvalid = {
    setAttribute: () => {},
    getPropertyValue: () => true
};

export let adBlockWindowValid = {
    document: {
        createElement: () => baitValid,
        body: {
            appendChild: () => baitValid,
            getAttribute: () => null,
            removeChild: () => {
                return;
            }
        }
    },
    getComputedStyle: () => baitValid
};

export let adBlockWindowValidAbp = {
    document: {
        createElement: () => baitValid,
        body: {
            appendChild: () => baitValid,
            getAttribute: () => true,
            removeChild: () => {
                return;
            }
        }
    },
    getComputedStyle: () => baitValid
};

export let adBlockWindowInvalid = {
    document: {
        createElement: () => baitInvalid,
        body: {
            appendChild: () => baitInvalid,
            getAttribute: () => null,
            removeChild: () => true
        }
    },
    getComputedStyle: () => baitInvalid
};

export let pdfWindowValid = {
    ActiveXObject: (name) => {
        if (name === "PDF.PdfCtrl") {
            return true;
        }
    }
};

export let pdfNavigatorValid = {
    plugins: [{
        name: "WebKit built-in PDF"
    }]
};

export let pdfWindowInvalid = {};
export let pdfNavigatorInvalid = {};

export let canvasWindowValid = {
    document: {
        createElement: () => {
            return {
                getContext: () => true
            }
        }
    }
};

export let canvasWindowInvalid = {
    document: {
        createElement: () => {
            return {}
        }
    }
};

export let flashWindowValid = {
    ActiveXObject: () => {
        return {}
    }
};

export let flashWindowInvalid = {};

export let flashNavigatorValid = {
    plugins: {
        "Shockwave Flash": {}
    }
};

export let flashNavigatorValidNoFlash = {
    plugins: {
        "something": {}
    }
};

export let flashNavigatorInvalid = {};

export let silverlightWindowValid = {
    ActiveXObject: () => {
        return {}
    }
};

export let silverlightWindowInvalid = {};
export let silverlightNavigatorInvalid = {};

export let silverlightNavigatorValid = {
    plugins: {
        "Silverlight Plug-In": {}
    }
};

export let silverlightNavigatorValidNoSL = {
    plugins: {
        "something": {}
    }
};

export let cookieDocument = {
    cookie: () => {
        return {
            indexOf: () => 0
        }
    }
};

export let cookieNavigatorValid = {
    cookieEnabled: true
};

export let cookieNavigatorInvalid = {
    cookieEnabled: false
};

export let touchWindowValid = {
    "touchstart": true
};

export let touchWindowInvalid = {};

export let touchNavigatorValid = {
    msMaxTouchPoints: 100
};

export let touchNavigatorInvalid = {};

export let quickTimeNavigatorValid = {
    plugins: [{
        name: "QuickTime TEST"
    }],
    appVersion: "test",
    appName: "app test"
};

export let quickTimeNavigatorOSValid = {
    plugins: [{
        name: "PDF"
    }],
    appVersion: "4.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36",
    appName: "Microsoft"
};

export let quickTimeNavigatorInvalid = {
    appVersion: "test",
    appName: "app test"
};

export let javaNavigatorValid = {
    javaEnabled: () => true
};

export let javaNavigatorInalid = {
    appVersion: "test"
};

export let javaNavigatorNotMethod = {
    javaEnabled: "test"
};

export let realPlayerNavigatorValid = {
    plugins: [{
        name: "RealPlayer Plugin"
    }]
};

export let realPlayerNavigatorInvalid = {};

export let realPlayerfWindowValid = {
    ActiveXObject: (name) => {
        if (name === "RealPlayer") {
            return true;
        }
    }
};

export let realPlayerfWindowInalid = {};