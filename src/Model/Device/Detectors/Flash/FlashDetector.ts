import { Detector } from "../../Detector";
import { Device } from "../../Device";

const FLASH_ACTIVE_OBJECT = "ShockwaveFlash.ShockwaveFlash";
const FLASH_PLUGIN = "Shockwave Flash";

export class FlashDetector implements Detector {
    private navigator: Navigator;
    private window;

    constructor(window, navigator: Navigator) {
        this.window = window;
        this.navigator = navigator;
    }

    public detect(device: Device): void {
        device.isFlash = this.navigator.plugins === undefined || this.navigator.plugins.length === 0 ?
            !!(this.window.hasOwnProperty("ActiveXObject") && new this.window.ActiveXObject(FLASH_ACTIVE_OBJECT)) :
            this.navigator.plugins[FLASH_PLUGIN] !== undefined;
    }
}
