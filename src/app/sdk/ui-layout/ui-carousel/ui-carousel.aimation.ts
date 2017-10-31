import {
    animate,
    AnimationTriggerMetadata, state, style, transition, trigger
} from '@angular/animations';
import { AnimatedCurves, AnimationDurations } from '../../../sdk';

const slideInCarouselAnimated: string = AnimationDurations.ENTERING + ' ' + AnimatedCurves.DECELERATION_CURVE;
const slideOutCarouselAnimated: string = AnimationDurations.EXITING + ' ' + AnimatedCurves.ACCELERATION_CURVE;

export const CarouselAnimation: AnimationTriggerMetadata = trigger(
    'carouselState',
    [
        state('offIndex', style({
            'display': 'none',
            'z-index': '0',
            'transform': 'translateX(0)'
        })),
        state('prevIndex', style({
            'z-index': '1',
            'transform': 'translateX(-100%)'
        })),
        state('nextIndex', style({
            'z-index': '2',
            'transform': 'translateX(100%)'
        })),
        state('curIndex', style({
            'z-index': '3',
            'transform': 'translateX(0)'
        })),
        transition('prevIndex=>curIndex,nextIndex=>curIndex', animate(slideInCarouselAnimated)),
        transition('curIndex=>prevIndex,curIndex=>nextIndex', animate(slideOutCarouselAnimated))
    ]
);
