import { QueryStringSerializer } from "../../src/Serializer/QueryStringSerializer";
import { Transport } from "../../src/Transport/Transport";

export let navigator = {
    sendBeacon: (data) => {

    }
};

export let config = {
    domain: "//localhost"
};

export let xhrTransport = {

};

export let pixelTransport = {

};

export let beaconTransport = {

};

export let transportFactory = {
    create: (type) => {
        return <Transport>{
            send: (data) => {

            }
        };
    }
};

export let serializerFactory = {
    createFromTransport: (type) => {
        return new QueryStringSerializer();
    }
};

export let modelNormalizer = {
    normalize: (model) => {

    }
};
