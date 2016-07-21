import { Model } from "../Model/Model";

export interface Normalizer {
    normalize(model: Model): Object;
}
