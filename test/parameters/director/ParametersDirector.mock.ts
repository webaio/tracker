import { Parameters } from '../../../src/parameters/Parameters';
import { ParametersBuilder } from '../../../src/parameters/builder/ParametersBuilder';

export class ParametersBuilderImpl implements ParametersBuilder {
    buildDevice() {
    }

    buildTrackerId() {
    }

    buildUrl() {
    }

    buildEvent(dataLayerElement:Object) {
    }

    buildDate(dataLayerElement:Object) {
    }

    getParameters():Parameters {
        return undefined;
    }
}

export let dataLayerElement = {
    event: 'test',
    date: 'another test property'
};