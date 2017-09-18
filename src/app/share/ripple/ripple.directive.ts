import { Directive, ElementRef, HostListener, Input, NgZone } from '@angular/core';

const FADE_IN_DURATIONS: number = 400;

@Directive({
    selector: '[ripple]',
    host: {
        'class': 'ripple',
        '[class.ripple-unbounded]': 'unbounded',
        '[style.position]': '"relative"'
    }
})
export class RippleDirective {

    @Input('color')
    public color: string;

    @Input('centered')
    public centered: boolean = false;

    @Input('radius')
    public radius: number = 0;

    @Input('speedFactor')
    public speedFactor: number = 0;

    @Input('unbounded')
    public unbounded: boolean;

    private _isMouseDown: boolean = false;

    private _documentRect?: ClientRect;

    private _containerElement: HTMLElement;

    private _activeRipples = new Set();

    constructor(private elementRef: ElementRef,
                private ngZone: NgZone) {
        this._containerElement = elementRef.nativeElement;
    }

    @HostListener('mousedown', ['$event'])
    public onMouseDown(evt: MouseEvent) {
        this._isMouseDown = true;
        this.fadeInRipple(evt.pageX, evt.pageY);
    }

    @HostListener('mouseup')
    public onMouseUp() {
        this._isMouseDown = false;
        this._activeRipples.forEach((ripple) => {
            this.fadeOutRipple(ripple);
        });
    }

    private fadeInRipple(pageX: number, pageY: number): void {
        let containerRect = this._containerElement.getBoundingClientRect();
        if (this.centered) {
            pageX = containerRect.left + containerRect.width / 2;
            pageY = containerRect.top + containerRect.height / 2;
        } else {
            let scrollPosition = this.getViewportScrollPosition();
            pageX -= scrollPosition.left;
            pageY -= scrollPosition.top;
        }

        let radius = this.radius || this.distanceToFurthestCorner(pageX, pageY, containerRect);

        let offsetX = pageX - containerRect.left;
        let offsetY = pageY - containerRect.top;
        let ripple = document.createElement('div');
        let duration = FADE_IN_DURATIONS * (1 / (this.speedFactor || 1));
        ripple.classList.add('ripple-element');

        ripple.style.left = `${offsetX - radius}px`;
        ripple.style.top = `${offsetY - radius}px`;
        ripple.style.height = `${radius * 2}px`;
        ripple.style.width = `${radius * 2}px`;
        ripple.style.transitionDuration = `${duration}ms`;
        ripple.style.backgroundColor = this.color || null;

        this._containerElement.appendChild(ripple);
        this.enforceStyleRecalculation(ripple);
        ripple.style.transform = 'scale(1)';
        this._activeRipples.add(ripple);
        // this.runTimeoutOutsideZone(() => {
        //     if (!this._isMouseDown) {
        //         this.fadeOutRipple(ripple);
        //     }
        // }, duration);

    }

    private fadeOutRipple(rippleRef: HTMLElement): void {
        if (!this._activeRipples.delete(rippleRef)) {
            return;
        }
        let duration = FADE_IN_DURATIONS * (1 / (this.speedFactor || 1));

        rippleRef.style.transitionDuration = `${duration}ms`;
        rippleRef.style.opacity = '0';

        this.runTimeoutOutsideZone(() => {
            rippleRef.parentNode.removeChild(rippleRef);
        }, duration);
    }

    private distanceToFurthestCorner(x: number, y: number, rect: ClientRect): number {
        const distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
        const distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
        return Math.sqrt(distX * distX + distY * distY);
    }

    private enforceStyleRecalculation(element: HTMLElement) {
        // Enforce a style recalculation by calling `getComputedStyle` and accessing any property.
        // Calling `getPropertyValue` is important to let optimizers know that this is not a noop.
        // See: https://gist.github.com/paulirish/5d52fb081b3570c81e3a
        window.getComputedStyle(element).getPropertyValue('opacity');
    }

    private getViewportScrollPosition(documentRect = this._documentRect) {
        // Cache the document bounding rect so that we don't recompute it for multiple calls.
        if (!documentRect) {
            this._cacheViewportGeometry();
            documentRect = this._documentRect;
        }
        const top = -documentRect!.top || document.body.scrollTop || window.scrollY ||
            document.documentElement.scrollTop || 0;

        const left = -documentRect!.left || document.body.scrollLeft || window.scrollX ||
            document.documentElement.scrollLeft || 0;

        return {top, left};
    }

    private _cacheViewportGeometry() {
        this._documentRect = document.documentElement.getBoundingClientRect();
    }

    /** Runs a timeout outside of the Angular zone to avoid triggering the change detection. */
    private runTimeoutOutsideZone(fn: Function, delay = 0) {
        this.ngZone.runOutsideAngular(() => setTimeout(fn, delay));
    }
}
