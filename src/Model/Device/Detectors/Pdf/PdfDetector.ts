import { Detector } from "../../Detector";
import { Device } from "../../Device";

let pluginNames = ["Adobe Acrobat", "Chrome PDF Viewer", "WebKit built-in PDF"];

export class PdfDetector implements Detector {
    private window: any;
    private navigator: Navigator;

    constructor(window: Window, navigator: Navigator) {
        this.window = window;
        this.navigator = navigator;
    }

    public detect(device: Device): void {
        let detected = this.canCreateActiveXObject("AcroPDF.PDF") || this.canCreateActiveXObject("PDF.PdfCtrl");

        if (!detected) {
            let pluginNamesLength = pluginNames.length;

            for (let index = 0; index < pluginNamesLength; index++) {
                if (this.hasNavigatorPlugin(pluginNames[index])) {
                    detected = true;
                    break;
                }
            }
        }

        device.isPdf = detected;
    }

    private canCreateActiveXObject(name): boolean {
        try {
            let activeObject = this.window.ActiveXObject(name);

            return activeObject !== undefined;
        } catch (e) {
            return false;
        }
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
            && this.navigator.plugins[plugin].hasOwnProperty("name")
            && this.navigator.plugins[plugin].name.indexOf(name) > -1;
    }
}
