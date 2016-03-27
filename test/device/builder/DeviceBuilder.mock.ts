import { WindowSizeDetector } from '../../../src/device/detectors/WindowSize/WindowSizeDetector';
import { ScreenSizeDetector } from '../../../src/device/detectors/ScreenSize/ScreenSizeDetector';
import { LocalStorageDetector } from '../../../src/device/detectors/LocalStorage/LocalStorageDetector';
import { SessionStorageDetector } from '../../../src/device/detectors/SessionStorage/SessionStorageDetector';
import { AdBlockDetector } from '../../../src/device/detectors/AdBlock/AdBlockDetector';

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