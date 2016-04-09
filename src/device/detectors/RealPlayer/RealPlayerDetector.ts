const PLUGIN_NAMES = ['RealPlayer(tm) G2 LiveConnect-Enabled Plug-In (32-bit)',
    'RealPlayer(tm) G2 LiveConnect-Enabled Plug-In (64-bit)',
    'RealPlayer Plugin'];

const AXO_NAMES = ['rmocx.RealPlayer G2 Control',
    'rmocx.RealPlayer G2 Control.1',
    'RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)',
    'RealVideo.RealVideo(tm) ActiveX Control (32-bit)',
    'RealPlayer'];

export class RealPlayerDetector {
    private navigator: Navigator;
    private window: any;

    constructor(window: any, navigator: Navigator) {
        this.navigator = navigator;
        this.window = window;
    }

    isRealPlayer() {
        let detected = false;
        let axoNamesLength = AXO_NAMES.length;

        for (let axoIndex = 0; axoIndex < axoNamesLength; axoIndex++) {
            if (this.canCreateActiveXObject(AXO_NAMES[axoIndex])) {
                detected = true;
                break;
            }
        }

        if (!detected) {
            let pluginNamesLength = PLUGIN_NAMES.length;

            for (let index = 0; index < pluginNamesLength; index++) {
                if (this.hasNavigatorPlugin(PLUGIN_NAMES[index])) {
                    detected = true;
                    break;
                }
            }
        }

        return detected;
    }

    private canCreateActiveXObject (name) {
        try {
            let activeObject = this.window.ActiveXObject(name);

            return activeObject !== undefined;
        } catch (e) {
            return false;
        }
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
}

