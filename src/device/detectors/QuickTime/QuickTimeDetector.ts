const QUICKTIME_NAME = 'QuickTime';

export class QuickTimeDetector {
    private navigator: Navigator;

    constructor (navigator: Navigator) {
        this.navigator = navigator;
    }

    isQuickTime () {
        let detected = false;

        if (this.hasNavigatorPlugin(QUICKTIME_NAME)) {
            detected = true;
        }

        if (this.detectByOS()) {
            detected = true;
        }

        return detected;
    }

    private hasNavigatorPlugin (name) {
        if (this.navigator.plugins) {
            for (let key in this.navigator.plugins) {
                if (this.detectName(key, name)) {
                    return true;
                }
            }
        }

        return false;
    }

    private detectName (plugin, name) {
        return this.navigator.plugins.hasOwnProperty(plugin)
            && this.navigator.plugins[plugin].hasOwnProperty('name')
            && this.navigator.plugins[plugin].name.indexOf(name) > -1;
    }

    private detectByOS () {
        return (this.navigator.appVersion.indexOf('Mac') > 0)
            && (this.navigator.appName.substring(0, 9) === 'Microsoft')
            && (parseInt(this.navigator.appVersion, 10) < 5);
    }
}