import { Injectable } from '@angular/core';

const hasV8BreakIterator = (typeof(Intl) !== 'undefined' && (Intl as any).v8BreakIterator);

@Injectable()
export class Platform {
    public isBrowser: boolean = typeof document === 'object' && !!document;

    /** Layout Engines */
    public EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
    public TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);

    // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.
    public BLINK = this.isBrowser &&
        (!!((window as any).chrome || hasV8BreakIterator) && !!CSS && !this.EDGE && !this.TRIDENT);

    // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
    // ensure that Webkit runs standalone and is not used as another engine's base.
    public WEBKIT = this.isBrowser &&
        /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;

    /** Browsers and Platform Types */
    public IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent)
        && !(window as any).MSStream;

    // It's difficult to detect the plain Gecko engine, because most of the browsers identify
    // them self as Gecko-like browsers and modify the userAgent's according to that.
    // Since we only cover one explicit Firefox case, we can simply check for Firefox
    // instead of having an unstable check for Gecko.
    public FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);

    // Trident on mobile adds the android platform to the userAgent to trick detections.
    public ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;

    // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
    // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
    // Safari browser should also use Webkit as its layout engine.
    public SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
}
