import { Sender } from "../../Transport/Sender";
import { Transports } from "../../Transport/Transports";
import { ModelBuilder } from "../../Model/ModelBuilder";
import { Model } from "../../Model/Model";
import { EventHandler } from "./EventHandler";

export class EventHandlerImpl implements EventHandler {
    constructor(private sender: Sender, private modelBuilder: ModelBuilder) {}

    public handle(dataLayerElementPayload: any) {
        let model: Model = new Model();
        this.modelBuilder.build(model, dataLayerElementPayload);
        this.sender.send(Transports.PIXEL_TRANSPORT, model);
    }
}
