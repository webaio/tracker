import { Builder } from "../Builder";
import { Model } from "../Model";
import { Content } from "./Content";
import { PropertyAccessor } from "../../Common/PropertyAccessor";

export class ContentBuilder implements Builder { 
    constructor(private document: Document, private accessor: PropertyAccessor) {}
    
    build(model: Model, dataLayerElementPayload: any) {
        let content: Content = new Content();
        content.location = this.accessor.access("location", dataLayerElementPayload, this.document.location.href);
        content.title = this.accessor.access("title", dataLayerElementPayload, this.document.title);
        content.host = this.accessor.access("host", dataLayerElementPayload, "");
        content.path = this.accessor.access("path", dataLayerElementPayload, "");
        model.content = content;
    }
}
