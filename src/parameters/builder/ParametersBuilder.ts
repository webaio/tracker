import { Parameters } from '../Parameters';
export interface ParametersBuilder {
    buildDevice();
    buildTrackerId();
    buildUrl();
    buildEvent(dataLayerElement: Object);
    buildDate(dataLayerElement: Object);
    getParameters(): Parameters;
}