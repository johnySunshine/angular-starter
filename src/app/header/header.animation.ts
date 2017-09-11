import {
    animate,
    AnimationTriggerMetadata, keyframes, state, style, transition, trigger
} from '@angular/animations';
import { AnimatedCurves, AnimationDurations } from '../sdk';

export const fadeInSubMenu: AnimationTriggerMetadata = trigger(
    'fadeMenu',
    [
        state('void', style({
            opacity: 0
        })),
        state('*', style({
            opacity: 1
        })),
        transition('void => *', animate(`${AnimationDurations.ENTERING} ${AnimatedCurves.DECELERATION_CURVE}`))
    ]
);

export const slideSubMenu: AnimationTriggerMetadata = trigger('slideMenu', [
    state('in', style({opacity: 1, transform: 'scale3d(1, 1, 1)'})),
    transition('void => *', [
        animate(125, keyframes([
            style({opacity: 0, transform: 'scale3d(1.2, 1.2, 1.2)', offset: 0}),
            style({opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1.0})
        ]))
    ]),
    transition('* => void', [
        animate(125, keyframes([
            style({opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 0}),
            style({opacity: 0, transform: 'scale3d(1.2, 1.2, 1.2)', offset: 1.0}),
        ]))
    ])
]);
