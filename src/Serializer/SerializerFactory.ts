import { JsonSerializer } from "../Serializer/JsonSerializer";
import { Serializer } from "../Serializer/Serializer";
import { QueryStringSerializer } from "../Serializer/QueryStringSerializer";
import { Transports } from "../Transport/Transports";

export class SerializerFactory {
    public createFromTransport(transportType: Transports) {
        let serializer: Serializer;
        
        if (transportType === Transports.PIXEL_TRANSPORT) {
            serializer = new QueryStringSerializer();
        } else {
            serializer = new JsonSerializer();
        }

        return serializer;
    }
}
