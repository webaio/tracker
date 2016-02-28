export interface WindowSize {
    getWidth():number;
    getHeight():number;
}

export class WindowSizeDetector implements WindowSize {
    getWidth(){ return 1; };
    getHeight(){ return 2; };
}

export interface ScreenSize {
    getAvailableWidth():number;
    getAvailableHeight():number;
}

export class ScreenSizeDetector implements ScreenSize {
    getAvailableWidth(){ return 3; };
    getAvailableHeight(){ return 4; };
}