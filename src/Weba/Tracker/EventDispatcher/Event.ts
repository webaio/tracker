export class Event {
    private propagationStopped: boolean = false;

    isPropagationStopped(): boolean {
        return this.propagationStopped;
    }

    stopPropagation(): void {
        this.propagationStopped = true;
    }
}
