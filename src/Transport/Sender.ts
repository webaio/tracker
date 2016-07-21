import { TransportFactory } from "./TransportFactory";
import { Transport } from "./Transport";
import { Transports } from "./Transports";
import { SerializerFactory } from "../Serializer/SerializerFactory";
import { Serializer } from "../Serializer/Serializer";
import { ModelNormalizer } from "../Normalizer/ModelNormalizer";
import { Model } from "../Model/Model";

export class Sender {
    constructor(
        private transportFactory: TransportFactory,
        private serializerFactory: SerializerFactory,
        private normalizer: ModelNormalizer
    ) {}

    public send(transportType: Transports, model: Model): void {
        let transport: Transport = this.transportFactory.create(transportType);
        let serializer: Serializer = this.serializerFactory.createFromTransport(transportType);
        transport.send(serializer.serialize(this.normalizer.normalize(model)));
    }
}
