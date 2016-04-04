import { DeviceBuilder } from './DeviceBuilder';
import { Device } from './../Device';
import { SessionStorageDetector } from '../detectors/SessionStorage/SessionStorageDetector';
import { LocalStorageDetector } from '../detectors/LocalStorage/LocalStorageDetector';
import { WindowSizeDetector } from '../detectors/WindowSize/WindowSizeDetector';
import { ScreenSizeDetector } from '../detectors/ScreenSize/ScreenSizeDetector';
import { AdBlockDetector } from '../detectors/AdBlock/AdBlockDetector';
import { PdfDetector } from '../detectors/Pdf/PdfDetector';
import { CanvasDetector } from '../detectors/Canvas/CanvasDetector';
import { FlashDetector } from '../detectors/Flash/FlashDetector';
import { SilverlightDetector } from '../detectors/Silverlight/SilverlightDetector';
import { CookieDetector } from '../detectors/Cookie/CookieDetector';
import { TouchDetector } from '../detectors/Touch/TouchDetector';
import { QuickTimeDetector } from '../detectors/QuickTime/QuickTimeDetector';
import { JavaDetector } from '../detectors/Java/JavaDetector';


export class DeviceBuilderImpl implements DeviceBuilder {
    private device: Device;
    private screenSizeDetector: ScreenSizeDetector;
    private windowSizeDetector: WindowSizeDetector;
    private localStorageDetector: LocalStorageDetector;
    private sessionStorageDetector: SessionStorageDetector;
    private adBlockDetector: AdBlockDetector;
    private pdfDetector: PdfDetector;
    private canvasDetector: CanvasDetector;
    private flashDetector: FlashDetector;
    private silverlightDetetor: SilverlightDetector;
    private cookieDetector: CookieDetector;
    private touchDetector: TouchDetector;
    private quickTimeDetector: QuickTimeDetector;
    private javaDetector: JavaDetector;

    constructor(
        screenSizeDetector: ScreenSizeDetector,
        windowSizeDetector: WindowSizeDetector,
        localStorageDetector: LocalStorageDetector,
        sessionStorageDetector: SessionStorageDetector,
        adBlockDetector: AdBlockDetector,
        pdfDetector: PdfDetector,
        canvasDetector: CanvasDetector,
        flashDetector: FlashDetector,
        silverlightDetector: SilverlightDetector,
        cookieDetector: CookieDetector,
        touchDetector: TouchDetector,
        quickTimeDetector: QuickTimeDetector,
        javaDetector: JavaDetector
    ) {
        this.device = new Device();

        this.screenSizeDetector = screenSizeDetector;
        this.windowSizeDetector = windowSizeDetector;
        this.localStorageDetector = localStorageDetector;
        this.sessionStorageDetector = sessionStorageDetector;
        this.adBlockDetector = adBlockDetector;
        this.pdfDetector = pdfDetector;
        this.canvasDetector = canvasDetector;
        this.flashDetector = flashDetector;
        this.silverlightDetetor = silverlightDetector;
        this.cookieDetector = cookieDetector;
        this.touchDetector = touchDetector;
        this.quickTimeDetector = quickTimeDetector;
        this.javaDetector = javaDetector;
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

    buildIsFlash() {
        this.device.isFlash = this.flashDetector.isFlash();
    }

    buildIsSilverlight() {
        this.device.isSilverlight = this.silverlightDetetor.isSilverlight();
    }

    buildIsCookie() {
        this.device.isCookie = this.cookieDetector.isCookie();
    }

    buildIsTouch() {
        this.device.isTouch = this.touchDetector.isTouch();
    }

    buildIsQuickTime() {
        this.device.isQuickTime = this.quickTimeDetector.isQuickTime();
    }

    buildIsJava() {
        this.device.isJava = this.javaDetector.isJava();
    }

    getDevice(): Device {
        return this.device;
    }
}