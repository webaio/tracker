const SILVERLIGHT_PLUGIN_NAME = 'Silverlight Plug-In';

export class SilverlightDetector {
    private window: any;
    private navigator: Navigator;

    constructor(window: any, navigator: Navigator) {
        this.window = window;
        this.navigator = navigator;
    }

    isSilverlight() {
        let detected = false;

        try {
            let tryIE = false;

            try {
                detected = !!(this.navigator.plugins[SILVERLIGHT_PLUGIN_NAME]);

                if (!detected) {
                    tryIE = true;
                }
            } catch (e) {
                tryIE = true;
            }

            if (tryIE) {
                let activeObject = new this.window.ActiveXObject('AgControl.AgControl');
                detected = !!(activeObject);
            }
        } finally {
            return detected;
        }
    }
}