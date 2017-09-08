import {
    animate,
    AnimationTriggerMetadata, state, style, transition, trigger
} from '@angular/animations';

export const fadeInSubMenu: AnimationTriggerMetadata = trigger(
    'fadeMenu',
    [
        state('void', style({
            opacity: 0
        })),
        state('*', style({
            opacity: 1
        })),
        transition('void=>*', animate('300ms cubic-bezier(0.25, 0.8, 0.25, 1)'))
    ]
);
