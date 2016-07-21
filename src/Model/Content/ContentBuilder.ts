import { Builder } from "../Builder";
import { Model } from "../Model";
import { Content } from "./Content";
import { DataLayerElementAccessor } from "../../Common/DataLayerElementAccessor";

export class ContentBuilder implements Builder { 
    constructor(private document: Document, private accessor: DataLayerElementAccessor) {}
    
    build(model: Model, dataLayerElementPayload: any) {
        let content = new Content();
        content.location = this.accessor.access("location", dataLayerElementPayload, this.document.location.href);
        content.title = this.accessor.access("title", dataLayerElementPayload, this.document.title);
        content.host = this.accessor.access("host", dataLayerElementPayload, null);
        content.path = this.accessor.access("path", dataLayerElementPayload, null);
        model.content = content;
    }
}
