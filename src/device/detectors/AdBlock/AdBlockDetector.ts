import {Detector} from '../../Detector';
import {Device} from '../../Device';

const baitClass: string = `
    pub_300x250
    pub_300x250m
    pub_728x90
    text-ad
    textAd
    text_ad
    text_ads
    text-ads
    text-ad-links
`;

const baitStyle: string = `
    width: 1px !important;
    height: 1px !important;
    position: absolute !important;
    left: -10000px !important;
    top: -1000px !important;
`;

export class AdBlockDetector implements Detector {
    private window: any;
    private bait: HTMLDivElement;

    constructor(window: any) {
        this.window = window;
    }

    public detect(device: Device): void {
        let detected = false;

        this.createBait();

        if (this.detectAdBlock()) {
            detected = true;
        }

        if (this.window.getComputedStyle !== undefined && !detected) {
            let baitTemp = this.window.getComputedStyle(this.bait, null);

            if (this.isHideByAdBlock(baitTemp)) {
                detected = true;
            }
        }

        this.destroyBait();

        device.isAdBlock = detected;
    }

    private createBait(): void {
        let bait: HTMLDivElement = this.window.document.createElement('div');
        bait.setAttribute('class', baitClass);
        bait.setAttribute('style', baitStyle);
        this.bait = this.window.document.body.appendChild(bait);

        this.bait.offsetParent = undefined;
        this.bait.offsetHeight = undefined;
        this.bait.offsetLeft = undefined;
        this.bait.offsetTop = undefined;
        this.bait.offsetWidth = undefined;
        this.bait.clientHeight = undefined;
        this.bait.clientWidth = undefined;
    };

    private destroyBait(): void {
        this.window.document.body.removeChild(this.bait);
    };

    private detectAdBlock(): boolean {
        return this.window.document.body.getAttribute('abp') !== null
            || this.bait.offsetParent === null
            || this.bait.offsetHeight === 0
            || this.bait.offsetLeft === 0
            || this.bait.offsetTop === 0
            || this.bait.offsetWidth === 0
            || this.bait.clientHeight === 0
            || this.bait.clientWidth === 0;
    }

    private isHideByAdBlock(baitTemp): boolean {
        return baitTemp && (baitTemp.getPropertyValue('display') === 'none' || baitTemp.getPropertyValue('visibility') === 'hidden');
    }
}
