import { Container } from "./Container";
import { ConfigReader } from "../Config/ConfigReader";
import { Tracker } from "../Tracker/Tracker";
import { DeviceDetector } from "../Model/Device/DeviceDetector";
import { ScreenSizeDetector } from "../Model/Device/Detectors/ScreenSize/ScreenSizeDetector";
import { WindowSizeDetector } from "../Model/Device/Detectors/WindowSize/WindowSizeDetector";
import { LocalStorageDetector } from "../Model/Device/Detectors/LocalStorage/LocalStorageDetector";
import { SessionStorageDetector } from "../Model/Device/Detectors/SessionStorage/SessionStorageDetector";
import { AdBlockDetector } from "../Model/Device/Detectors/AdBlock/AdBlockDetector";
import { PdfDetector } from "../Model/Device/Detectors/Pdf/PdfDetector";
import { CanvasDetector } from "../Model/Device/Detectors/Canvas/CanvasDetector";
import { FlashDetector } from "../Model/Device/Detectors/Flash/FlashDetector";
import { SilverlightDetector } from "../Model/Device/Detectors/Silverlight/SilverlightDetector";
import { CookieDetector } from "../Model/Device/Detectors/Cookie/CookieDetector";
import { TouchDetector } from "../Model/Device/Detectors/Touch/TouchDetector";
import { QuickTimeDetector } from "../Model/Device/Detectors/QuickTime/QuickTimeDetector";
import { JavaDetector } from "../Model/Device/Detectors/Java/JavaDetector";
import { RealPlayerDetector } from "../Model/Device/Detectors/RealPlayer/RealPlayerDetector";
import { ModelBuilder } from "../Model/ModelBuilder";
import { DeviceBuilder } from "../Model/Device/DeviceBuilder";
import { ContentBuilder } from "../Model/Content/ContentBuilder";
import { EventBuilder } from "../Model/Event/EventBuilder";
import { TransportFactory } from "../Transport/TransportFactory";
import { SerializerFactory } from "../Serializer/SerializerFactory";
import { Sender } from "../Transport/Sender";
import { ModelNormalizer } from "../Normalizer/ModelNormalizer";
import { CustomDimensionsBuilder } from "../Model/CustomDimension/CustomDimensionsBuilder";
import { CustomMetricsBuilder } from "../Model/CustomMetric/CustomMetricsBuilder";
import { EventHandlerImpl } from "../Event/Handler/EventHandlerImpl";
import { XhrTransport } from "../Transport/XhrTransport";
import { PixelTransport } from "../Transport/PixelTransport";
import { BeaconTransport } from "../Transport/BeaconTransport";
import { UrlDecoder } from "../Common/UrlDecoder";
import { PropertyAccessor } from "../Common/PropertyAccessor";
import { VisitorBuilder } from "../Model/Visitor/VistitorBuilder";
import { EncodingDetector } from "../Model/Device/Detectors/Encoding/EncodingDetector";
import { ColorsDetector } from "../Model/Device/Detectors/Colors/ColorsDetector";
import { LanguageDetector } from "../Model/Device/Detectors/Language/LanguageDetector";
import { SessionManager} from "../Session/SessionManager";
import { SessionCookieSerializer } from "../Session/Serializer/SessionCookieSerializer";
import { SessionCookieStorage } from "../Session/Storage/SessionCookieStorage";
import { VisitorCookieSerializer } from "../Session/Serializer/VisitorCookieSerializer";
import { VisitorCookieStorage } from "../Session/Storage/VisitorCookieStorage";

export let container = new Container();
let global: any = window;

container.set("weba.url_decoder", () => {
    return new UrlDecoder();
});

container.set("weba.config", (c: Container) => {
    let configReader = new ConfigReader(c.get("weba.url_decoder"));

    return configReader.read(<HTMLScriptElement>document.getElementsByTagName("script")[0]);
});

container.set("weba.global", (c: Container) => {
    return global[c.get("weba.config").globalFunctionName];
});

container.set("weba.model_builder", (c: Container) => {
    let modelBuilder = new ModelBuilder();
    modelBuilder.addBuilder(new DeviceBuilder(c.get("weba.device_detector")));
    modelBuilder.addBuilder(new ContentBuilder(document, c.get("weba.property_accessor")));
    modelBuilder.addBuilder(new EventBuilder(c.get("weba.config")));
    modelBuilder.addBuilder(new CustomDimensionsBuilder());
    modelBuilder.addBuilder(new CustomMetricsBuilder());
    modelBuilder.addBuilder(new VisitorBuilder(c.get("weba.session_manager")));

    return modelBuilder;
});

container.set("weba.tracker", (c: Container) => {
    return new Tracker(c.get("weba.global"), c.get("weba.event_handler"));
});

container.set("weba.device_detector", () => {
    let deviceDetector = new DeviceDetector();
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
    deviceDetector.addDetector(new EncodingDetector(document));
    deviceDetector.addDetector(new ColorsDetector(screen));
    deviceDetector.addDetector(new LanguageDetector(navigator));

    return deviceDetector;
});

container.set("weba.xhr_transport", (c: Container) => {
    return new XhrTransport(c.get("weba.config"));
});

container.set("weba.pixel_transport", (c: Container) => {
    return new PixelTransport(c.get("weba.config"));
});

container.set("weba.beacon_transport", (c: Container) => {
    return new BeaconTransport(navigator, c.get("weba.config"));
});

container.set("weba.transport_factory", (c: Container) => {
   return new TransportFactory(
       c.get("weba.xhr_transport"),
       c.get("weba.pixel_transport"),
       c.get("weba.beacon_transport")
   );
});

container.set("weba.normalizer", () => {
    return new ModelNormalizer();
});

container.set("weba.serializer_factory", () => {
    return new SerializerFactory();
});

container.set("weba.sender", (c: Container) => {
    return new Sender(c.get("weba.transport_factory"), c.get("weba.serializer_factory"), c.get("weba.normalizer"));
});

container.set("weba.event_handler", (c: Container) => {
    return new EventHandlerImpl(c.get("weba.sender"), c.get("weba.model_builder"));
});

container.set("weba.property_accessor", () => {
    return new PropertyAccessor();
});

container.set("weba.session_cookie_serializer", (c) => {
    return new SessionCookieSerializer(document, c.get("weba.config"));
});

container.set("weba.visitor_cookie_serializer", (c) => {
    return new VisitorCookieSerializer(document, c.get("weba.config"));
});

container.set("weba.session_cookie_storage", (c) => {
    return new SessionCookieStorage(document, c.get("weba.session_cookie_serializer"));
});

container.set("weba.visitor_cookie_storage", (c) => {
    return new VisitorCookieStorage(document, c.get("weba.visitor_cookie_serializer"));
});

container.set("weba.session_manager", (c) => {
    return new SessionManager(c.get("weba.session_cookie_storage"), c.get("weba.visitor_cookie_storage"));
});