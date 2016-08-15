///<reference path="../../typings/main.d.ts" />

import { expect } from "chai";
import * as Mocks from "./SessionManager.mock";
import { SessionManager } from "../../src/Session/SessionManager";
import { SessionCookieStorage } from "../../src/Session/Storage/SessionCookieStorage";
import { VisitorCookieStorage } from "../../src/Session/Storage/VisitorCookieStorage";

describe("SessionManager", () => {
    it("handles session for new visit", (done) => {
        let sessionManager = new SessionManager(
            <SessionCookieStorage>Mocks.sessionCookieStorageWithoutCurrentSession,
            <VisitorCookieStorage>Mocks.visitorCookieStorageWithoutCurrentVisitor
        );
        let sessionAggregate = sessionManager.handle();

        expect(sessionAggregate.session.sessionStartedAt).to.be.equal(sessionAggregate.visitor.firstVisitAt);
        expect(sessionAggregate.session.sessionStartedAt).to.be.equal(sessionAggregate.visitor.lastVisitAt);
        expect(sessionAggregate.session.sessionEndedAt.getTime()).to.be.equal(
            sessionAggregate.session.sessionStartedAt.getTime() + 1800000
        );

        done();

    });

    it("handles session for existing session and visitor", (done) => {
        let sessionManager = new SessionManager(
            <SessionCookieStorage>Mocks.sessionCookieStorageExistingSession,
            <VisitorCookieStorage>Mocks.visitorCookieStorageWithExisitingVisitor
        );
        sessionManager.handle();
        
        done();
    });

    it("handles session for new session and existing visitor", (done) => {
        let sessionManager = new SessionManager(
            <SessionCookieStorage>Mocks.sessionCookieStorageWithoutCurrentSession,
            <VisitorCookieStorage>Mocks.visitorCookieStorageWithExisitingVisitor
        );
        sessionManager.handle();

        done();
    });
});
