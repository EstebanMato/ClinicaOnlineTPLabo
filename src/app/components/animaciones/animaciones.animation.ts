// fade-in-up.animation.ts

import { trigger, transition, style, animate } from '@angular/animations';

export const fadeInUpAnimation = trigger('fadeInUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(100%)' }),
    animate('500ms ease-in', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
  transition(':leave', [
    animate('500ms ease-out', style({ opacity: 0, transform: 'translateY(100%)' })),
  ]),
]);

export const fadeInRightAnimation = trigger('fadeInRight', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(-100%)' }),
    animate('500ms ease-in', style({ opacity: 1, transform: 'translateX(0)' })),
  ]),
  transition(':leave', [
    animate('500ms ease-out', style({ opacity: 0, transform: 'translateX(100%)' })),
  ]),
]);

