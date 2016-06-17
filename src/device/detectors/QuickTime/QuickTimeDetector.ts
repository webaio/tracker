import {Detector} from '../../Detector';
import {Device} from '../../Device';

const QUICKTIME_NAME = 'QuickTime';

export class QuickTimeDetector implements Detector {
    private navigator: Navigator;

    constructor (navigator: Navigator) {
        this.navigator = navigator;
    }

    public detect(device: Device): void {
        let detected = false;

        if (this.hasNavigatorPlugin(QUICKTIME_NAME)) {
            detected = true;
        }

        if (this.detectByOS()) {
            detected = true;
        }

        device.isQuickTime = detected;
    }

    private hasNavigatorPlugin(name): boolean {
        if (this.navigator.plugins) {
            for (let key in this.navigator.plugins) {
                if (this.detectName(key, name)) {
                    return true;
                }
            }
        }

        return false;
    }

    private detectName(plugin, name): boolean {
        return this.navigator.plugins.hasOwnProperty(plugin)
            && this.navigator.plugins[plugin].hasOwnProperty('name')
            && this.navigator.plugins[plugin].name.indexOf(name) > -1;
    }

    private detectByOS(): boolean {
        return (this.navigator.appVersion.indexOf('Mac') > 0)
            && (this.navigator.appName.substring(0, 9) === 'Microsoft')
            && (parseInt(this.navigator.appVersion, 10) < 5);
    }
}
