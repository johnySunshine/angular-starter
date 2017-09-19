import {
    animate,
    AnimationTriggerMetadata, keyframes, state, style, transition, trigger
} from '@angular/animations';
import { AnimatedCurves, AnimationDurations } from '../sdk';

const slideInSubmenuAnimated: string = AnimationDurations.ENTERING + ' ' + AnimatedCurves.DECELERATION_CURVE;
const slideOutSubmenuAnimated: string = AnimationDurations.EXITING + ' ' + AnimatedCurves.ACCELERATION_CURVE;

export const fadeInSubMenu: AnimationTriggerMetadata = trigger(
    'fadeMenu',
    [
        state('void', style({
            opacity: 0
        })),
        state('*', style({
            opacity: 1
        })),
        transition('void => *', animate(slideInSubmenuAnimated))
    ]
);

export const slideSubMenu: AnimationTriggerMetadata = trigger('slideMenu', [
    state('in', style({opacity: 1, transform: 'scale3d(1, 1, 1)'})),
    transition('void => *', [
        animate(slideInSubmenuAnimated, keyframes([
            style({opacity: 0, transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0}),
            style({opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1.0})
        ]))
    ]),
    transition('* => void', [
        animate(slideOutSubmenuAnimated, keyframes([
            style({opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 0}),
            style({opacity: 0, transform: 'scale3d(1.1, 1.1, 1.1)', offset: 1.0}),
        ]))
    ])
]);
