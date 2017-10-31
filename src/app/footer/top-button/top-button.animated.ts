import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { AnimatedCurves, AnimationDurations } from '../../sdk/animated/animated';

export const toTopStateAnimate =
    trigger('topScale', [
        state('in', style({opacity: 1, transform: 'scale3d(1, 1, 1)'})),
        transition('void => *', [
            animate(AnimationDurations.ENTERING + ' ' + AnimatedCurves.SHARP_CURVE, keyframes([
                style({
                    opacity: 0,
                    transform: 'scale3d(.4, .4, .4)',
                    offset: 0
                }),
                style({
                    opacity: 1,
                    transform: 'scale3d(1, 1, 1)',
                    offset: 1.0
                })
            ]))
        ]),
        transition('* => void', [
            animate(AnimationDurations.EXITING + ' ' + AnimatedCurves.SHARP_CURVE, keyframes([
                style({
                    opacity: 1,
                    transform: 'scale3d(1, 1, 1)',
                    offset: 0
                }),
                style({
                    opacity: 0,
                    transform: 'scale3d(.4, .4, .4)',
                    offset: 1.0
                }),
            ]))
        ])
    ]);
