import { DeviceBuilder } from './DeviceBuilder';
import { Device } from './../Device';
import { SessionStorageDetector } from '../detectors/SessionStorage/SessionStorageDetector';
import { LocalStorageDetector } from '../detectors/LocalStorage/LocalStorageDetector';
import { WindowSizeDetector } from '../detectors/WindowSize/WindowSizeDetector';
import { ScreenSizeDetector } from '../detectors/ScreenSize/ScreenSizeDetector';

export class DeviceBuilderImpl implements DeviceBuilder {
    private device: Device;
    private screenSizeDetector: ScreenSizeDetector;
    private windowSizeDetector: WindowSizeDetector;
    private localStorageDetector: LocalStorageDetector;
    private sessionStorageDetector: SessionStorageDetector;

    constructor(
        screenSizeDetector: ScreenSizeDetector,
        windowSizeDetector: WindowSizeDetector,
        localstorageDetector: LocalStorageDetector,
        sessionStorageDetector: SessionStorageDetector
    ) {
        this.device = new Device();

        this.screenSizeDetector = screenSizeDetector;
        this.windowSizeDetector = windowSizeDetector;
        this.localStorageDetector = localstorageDetector;
        this.sessionStorageDetector = sessionStorageDetector;
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

    getDevice(): Device {
        return this.device;
    }
}