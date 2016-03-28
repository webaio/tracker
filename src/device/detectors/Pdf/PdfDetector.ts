let pluginNames = ['Adobe Acrobat', 'Chrome PDF Viewer', 'WebKit built-in PDF'];

export class PdfDetector {
    private window: any;
    private navigator: Navigator;

    constructor(window: Window, navigator: Navigator) {
        this.window = window;
        this.navigator = navigator;
    }

    isPdf() {
        let detected = this.canCreateActiveXObject('AcroPDF.PDF') || this.canCreateActiveXObject('PDF.PdfCtrl');

        if (!detected) {
            let pluginNamesLength = pluginNames.length;

            for (let index = 0; index < pluginNamesLength; index++) {
                if (this.hasNavigatorPlugin(pluginNames[index])) {
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
                if (this.navigator.plugins.hasOwnProperty(key) && this.navigator.plugins[key].name.indexOf(name) > -1) {
                    return true;
                }
            }
        }

        return false;
    }
}