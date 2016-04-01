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
    getPropertyValue: () => 'hidden'
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
        if (name === 'PDF.PdfCtrl') {
            return true;
        }
    }
};

export let pdfNavigatorValid = {
    plugins: [{
        name: 'WebKit built-in PDF'
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
        'Shockwave Flash': {}
    }
};

export let flashNavigatorValidNoFlash = {
    plugins: {
        'something': {}
    }
};

export let flashNavigatorInvalid = {};
