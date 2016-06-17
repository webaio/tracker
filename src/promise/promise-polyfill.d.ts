declare module 'promise' {
    export = promise;
}

declare module promise {
    interface Promise {
        new(fn?: Function): Promise;
        catch(onRejected: Function): Promise;
        then(onFulfilled: Function, onRejected?: Function): Promise;
    }
}
