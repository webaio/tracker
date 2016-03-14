import { Device } from '../../../src/device/Device';

export let config = {
    trackerId: 'WEBA-123'
};

export let global = {
    location: {
        href: 'http://localhost:8000/test.php?_utm_campaign=webatest'
    }
};

export let deviceDirector = {
    getDevice: () => {
        let device: Device = {
            width: 1,
            height: 2,
            availableWidth: 3,
            availableHeight: 4
        };

        return device;
    },
    buildDevice: () => true
}