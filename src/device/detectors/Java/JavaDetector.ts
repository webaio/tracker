const JAVA_ENABLED_PROPERTY = 'javaEnabled';

export class JavaDetector {
    private navigator: Navigator;

    constructor(navigator: Navigator) {
        this.navigator = navigator;
    }

    isJava(): boolean {
        let detected = false;

        if (this.hasJavaEnabledMethod()) {
            detected = this.navigator.javaEnabled();
        }

        return detected;
    }

    private hasJavaEnabledMethod () {
        return this.navigator.hasOwnProperty(JAVA_ENABLED_PROPERTY) && typeof this.navigator[JAVA_ENABLED_PROPERTY] === 'function';
    }
}