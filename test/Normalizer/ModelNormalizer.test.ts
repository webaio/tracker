///<reference path="../../typings/main.d.ts" />

import { expect } from "chai";
import { ModelNormalizer } from "../../src/Normalizer/ModelNormalizer";
import { Model } from "../../src/Model/Model";
import { CustomDimension } from "../../src/Model/CustomDimension/CustomDimension";
import { CustomMetric } from "../../src/Model/CustomMetric/CustomMetric";
import { Content } from "../../src/Model/Content/Content";
import { Device } from "../../src/Model/Device/Device";
import { Event } from "../../src/Model/Event/Event";
import { Visitor } from "../../src/Model/Visitor/Visitor";

describe("ModelNormalizer", () => {
    it("should normalize model to object", (done) => {
        let modelNormalizer = new ModelNormalizer();

        let model = new Model();
        model.addCustomDimension(new CustomDimension(1, "test1"));
        model.addCustomMetric(new CustomMetric(1, 100));

        let content = new Content();
        content.host = "localhost";
        content.location = "http://localhost/test.html";
        content.path = "/test/test2";
        content.title = "Test title";
        model.content = content;

        let device = new Device();
        device.availableHeight = 800;
        device.availableWidth = 1280;
        device.colors = 24;
        device.encoding = "UTF-8";
        device.flashVersion = "22";
        device.height = 1280;
        device.isAdBlock = true;
        device.isCanvas = true;
        device.isCookie = true;
        device.isFlash = true;
        device.isJava = true;
        device.isJavascript = true;
        device.isLocalStorage = true;
        device.isPdf = true;
        device.isQuickTime = true;
        device.isRealPlayer = true;
        device.isSessionStorage = true;
        device.isSilverlight = true;
        device.isTouch = true;
        device.language = "pl";
        device.width = 1600;
        model.device = device;

        let event = new Event();
        event.name = "pageView";
        event.trackerId = "TRACKER-01";
        model.event = event;

        let visitor = new Visitor();
        visitor.firstVisitAt = 1470947640;
        visitor.currentVisitAt = 1470947650;
        visitor.sessionStartedAt = 1470977640;
        visitor.sessionEndedAt = 1470948640;
        visitor.sessionId = "cb04110e-6907-4ab9-b91d-b9b830f160b3";
        visitor.visitorId = "9f33535c-5e09-4309-8f37-daa8793b163a";
        model.visitor = visitor;

        let result = modelNormalizer.normalize(model);

        expect(result.e).to.equal("pageView");
        expect(result.l).to.equal("pl");
        expect(result.t).to.equal("TRACKER-01");
        expect(result.de).to.equal("UTF-8");
        expect(result.sr).to.equal("1600x1280");
        expect(result.sv).to.equal("1280x800");
        expect(result.cd).to.equal(24);
        expect(result.di).to.equal("3fff");
        expect(result.dl).to.equal("http://localhost/test.html");
        expect(result.dh).to.equal("localhost");
        expect(result.dp).to.equal("/test/test2");
        expect(result.dt).to.equal("Test title");
        expect(result.cb).to.have.length.below(11);
        expect(result.vid).to.equal("9f33535c-5e09-4309-8f37-daa8793b163a");
        expect(result.sid).to.equal("cb04110e-6907-4ab9-b91d-b9b830f160b3");
        expect(result.st).to.equal("1470947640.1470977640.1470948640.1470947650");
        expect(result["cd[1]"]).to.equal("test1");
        expect(result["cm[1]"]).to.equal(100);

        done();
    });
});
