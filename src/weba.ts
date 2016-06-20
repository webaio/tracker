import { EventHandler } from './event/handler/EventHandler';
import { ParametersDirector } from './parameters/director/ParametersDirector';
import { RequestHandler } from './request/handler/RequestHandler';
import { ParametersNormalizer } from './parameters/normalizer/ParametersNormalizer';
import { ParametersBuilder } from './parameters/builder/ParametersBuilder';
import { ParametersBuilderImpl } from './parameters/builder/ParametersBuilderImpl';
import { Config } from './config/Config';
import { ConfigImpl } from './config/ConfigImpl';
import { ScreenSizeDetector } from './device/detectors/ScreenSize/ScreenSizeDetector';
import { WindowSizeDetector } from './device/detectors/WindowSize/WindowSizeDetector';
import { QueryStringBuilder } from './queryString/builder/QueryStringBuilder';
import { Ajax } from './request/types/Ajax';
import { LocalStorageDetector } from './device/detectors/LocalStorage/LocalStorageDetector';
import { SessionStorageDetector } from './device/detectors/SessionStorage/SessionStorageDetector';
import { AdBlockDetector } from './device/detectors/AdBlock/AdBlockDetector';
import { PdfDetector } from './device/detectors/Pdf/PdfDetector';
import { CanvasDetector } from './device/detectors/Canvas/CanvasDetector';
import { FlashDetector } from './device/detectors/Flash/FlashDetector';
import { SilverlightDetector } from './device/detectors/Silverlight/SilverlightDetector';
import { CookieDetector } from './device/detectors/Cookie/CookieDetector';
import { TouchDetector } from './device/detectors/Touch/TouchDetector';
import { QuickTimeDetector } from './device/detectors/QuickTime/QuickTimeDetector';
import { JavaDetector } from './device/detectors/Java/JavaDetector';
import { RealPlayerDetector } from './device/detectors/RealPlayer/RealPlayerDetector';
import { DeviceDetector } from './device/DeviceDetector';
import { Device } from './device/Device';

let pageview = {
    event: 'pageview',
    date: new Date().toISOString()
};

const MAX_DATALAYER_SIZE: number = 300;

let global: any = window,
    push: any,
    dataLayer: Array<any> = [],
    eventHandler: EventHandler,
    config: Config,
    deviceDetector: DeviceDetector,
    parametersDirector: ParametersDirector,
    parametersBuilder: ParametersBuilder,
    queryStringBuilder: QueryStringBuilder,
    ajax: Ajax,
    requestHandler: RequestHandler,
    parametersNormalizer: ParametersNormalizer;

global.dataLayer = global.dataLayer || [];
push = global.dataLayer.push;

let scripts: any = document.getElementsByTagName('script');
let scriptElement: HTMLScriptElement = <HTMLScriptElement>scripts[0];

config = new ConfigImpl(scriptElement);
parametersNormalizer = new ParametersNormalizer();
queryStringBuilder = new QueryStringBuilder();
ajax = new Ajax();
requestHandler = new RequestHandler(queryStringBuilder, config, ajax);

deviceDetector = new DeviceDetector();
deviceDetector.addDetector(new ScreenSizeDetector(global));
deviceDetector.addDetector(new WindowSizeDetector(global));
deviceDetector.addDetector(new LocalStorageDetector(localStorage));
deviceDetector.addDetector(new SessionStorageDetector(sessionStorage));
deviceDetector.addDetector(new AdBlockDetector(global));
deviceDetector.addDetector(new PdfDetector(global, navigator));
deviceDetector.addDetector(new CanvasDetector(global));
deviceDetector.addDetector(new FlashDetector(global, navigator));
deviceDetector.addDetector(new SilverlightDetector(global, navigator));
deviceDetector.addDetector(new CookieDetector(document, navigator));
deviceDetector.addDetector(new TouchDetector(global, navigator));
deviceDetector.addDetector(new QuickTimeDetector(navigator));
deviceDetector.addDetector(new JavaDetector(navigator));
deviceDetector.addDetector(new RealPlayerDetector(global, navigator));
deviceDetector.detect(new Device());


parametersBuilder = new ParametersBuilderImpl(config, global, deviceDetector);
parametersDirector = new ParametersDirector(parametersBuilder);
eventHandler = new EventHandler(parametersDirector, requestHandler, parametersNormalizer);

global.dataLayer.push = (...dataLayerElements) => {
    push.apply(global.dataLayer, Array.prototype.slice.call(dataLayerElements, 0));

    for (dataLayer.push.apply(dataLayer, dataLayerElements); global.dataLayer.length > MAX_DATALAYER_SIZE; ) {
        global.dataLayer.shift();
    }

    eventHandler.handle(dataLayerElements);
};

global.dataLayer.push(pageview);