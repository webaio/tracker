import { Detector } from "../../Detector";
import { Device } from "../../Device";

const SILVERLIGHT_PLUGIN_NAME = "Silverlight Plug-In";

export class SilverlightDetector implements Detector {
    private window: any;
    private navigator: Navigator;

    constructor(window: any, navigator: Navigator) {
        this.window = window;
        this.navigator = navigator;
    }

    public detect(device: Device): void {
        let detected = false;

        try {
            let tryIE = false;

            try {
                detected = !!(this.navigator.plugins[SILVERLIGHT_PLUGIN_NAME]);

                if (detected) {
                    tryIE = true;
                }
            } catch (e) {
                tryIE = false;
            }

            if (tryIE) {
                let activeObject = new this.window.ActiveXObject("AgControl.AgControl");
                detected = !!(activeObject);
            }
        } finally {
            device.isSilverlight = detected;
        }

        device.isSilverlight = detected;
    }
}
