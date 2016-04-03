import { WindowSizeDetector } from '../../../src/device/detectors/WindowSize/WindowSizeDetector';
import { ScreenSizeDetector } from '../../../src/device/detectors/ScreenSize/ScreenSizeDetector';
import { LocalStorageDetector } from '../../../src/device/detectors/LocalStorage/LocalStorageDetector';
import { SessionStorageDetector } from '../../../src/device/detectors/SessionStorage/SessionStorageDetector';
import { AdBlockDetector } from '../../../src/device/detectors/AdBlock/AdBlockDetector';
import { PdfDetector } from '../../../src/device/detectors/Pdf/PdfDetector';
import { CanvasDetector } from '../../../src/device/detectors/Canvas/CanvasDetector';
import { FlashDetector } from '../../../src/device/detectors/Flash/FlashDetector';
import { SilverlightDetector } from '../../../src/device/detectors/Silverlight/SilverlightDetector';
import { CookieDetector } from '../../../src/device/detectors/Cookie/CookieDetector';

export let windowSizeDetector = <WindowSizeDetector> {
    getWidth: () => { return 1; },
    getHeight: () => { return 2; }
};

export let screenSizeDetector = <ScreenSizeDetector> {
    getAvailableWidth: () => { return 3; },
    getAvailableHeight: () => { return 4; }
};

export let localStorageDetector = <LocalStorageDetector> {
    isLocalStorage: () => { return true }
};

export let sessionStorageDetector = <SessionStorageDetector> {
    isSessionStorage: () => { return false }
};

export let adBlockDetector = <AdBlockDetector> {
    isAdBlock: () => { return true }
};

export let pdfDetector = <PdfDetector> {
    isPdf: () => { return true }
};

export let canvasDetector = <CanvasDetector>{
    isCanvas: () => { return true }
};

export let flashDetector = <FlashDetector>{
    isFlash: () => { return true }
};

export let silverlightDetector = <SilverlightDetector>{
    isSilverlight: () => { return true }
};

export let cookieDetector = <CookieDetector>{
    isCookie: () => { return true }
};