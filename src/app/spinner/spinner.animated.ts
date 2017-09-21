import {
    animate,
    AnimationTriggerMetadata, keyframes, state, style, transition, trigger
} from '@angular/animations';
import { AnimatedCurves, AnimationDurations } from '../sdk';

const SpinnerAnimated: string = AnimationDurations.ENTERING + ' ' + AnimatedCurves.DECELERATION_CURVE;

export const fadeInSpinner: AnimationTriggerMetadata = trigger(
    'fadeSpinner',
    [
        state('void', style({
            opacity: 0
        })),
        state('*', style({
            opacity: 1
        })),
        transition('void => *', animate(SpinnerAnimated))
    ]
);
