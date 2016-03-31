import { DeviceBuilder } from './DeviceBuilder';
import { Device } from './../Device';
import { SessionStorageDetector } from '../detectors/SessionStorage/SessionStorageDetector';
import { LocalStorageDetector } from '../detectors/LocalStorage/LocalStorageDetector';
import { WindowSizeDetector } from '../detectors/WindowSize/WindowSizeDetector';
import { ScreenSizeDetector } from '../detectors/ScreenSize/ScreenSizeDetector';
import { AdBlockDetector } from '../detectors/AdBlock/AdBlockDetector';
import { PdfDetector } from '../detectors/Pdf/PdfDetector';
import { CanvasDetector } from '../detectors/Canvas/CanvasDetector';


export class DeviceBuilderImpl implements DeviceBuilder {
    private device: Device;
    private screenSizeDetector: ScreenSizeDetector;
    private windowSizeDetector: WindowSizeDetector;
    private localStorageDetector: LocalStorageDetector;
    private sessionStorageDetector: SessionStorageDetector;
    private adBlockDetector: AdBlockDetector;
    private pdfDetector: PdfDetector;
    private canvasDetector: CanvasDetector;

    constructor(
        screenSizeDetector: ScreenSizeDetector,
        windowSizeDetector: WindowSizeDetector,
        localStorageDetector: LocalStorageDetector,
        sessionStorageDetector: SessionStorageDetector,
        adBlockDetector: AdBlockDetector,
        pdfDetector: PdfDetector,
        canvasDetector: CanvasDetector
    ) {
        this.device = new Device();

        this.screenSizeDetector = screenSizeDetector;
        this.windowSizeDetector = windowSizeDetector;
        this.localStorageDetector = localStorageDetector;
        this.sessionStorageDetector = sessionStorageDetector;
        this.adBlockDetector = adBlockDetector;
        this.pdfDetector = pdfDetector;
        this.canvasDetector = canvasDetector;
    }

    buildWidth() {
        this.device.width = this.windowSizeDetector.getWidth();
    }

    buildHeight() {
        this.device.height = this.windowSizeDetector.getHeight();
    }

    buildAvailableWidth() {
        this.device.availableWidth = this.screenSizeDetector.getAvailableWidth();
    }

    buildAvailableHeight() {
        this.device.availableHeight = this.screenSizeDetector.getAvailableHeight();
    }

    buildIsLocalStorage() {
        this.device.isLocalStorage = this.localStorageDetector.isLocalStorage();
    }

    buildIsSessionStorage () {
        this.device.isSessionStorage = this.sessionStorageDetector.isSessionStorage();
    }

    buildIsAdBlock () {
        this.device.isAdBlock = this.adBlockDetector.isAdBlock();
    }

    buildIsJavascript () {
        this.device.isJavascript = true;
    }

    buildIsPdf () {
        this.device.isPdf = this.pdfDetector.isPdf();
    }

    buildIsCanvas() {
        this.device.isCanvas = this.canvasDetector.isCanvas();
    }

    getDevice(): Device {
        return this.device;
    }
}