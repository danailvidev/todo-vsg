import { trigger, transition, style, animate } from '@angular/animations';

export const animations = [
  trigger('inOutAnimation', [
    transition(':enter', [
      style({ height: 0, opacity: 0 }),
      animate('1s ease-out', style({ height: 50, opacity: 1 })),
    ]),
    transition(':leave', [
      style({ height: 50, opacity: 1 }),
      animate('1s ease-in', style({ height: 0, opacity: 0 })),
    ]),
  ]),
  trigger('myAnimation', [
    transition(':enter', [
      style({ transform: 'translateX(100%)', opacity: 0 }),
      animate('300ms', style({ transform: 'translateX(0)', opacity: 1 })),
    ]),
    transition(':leave', [
      style({ transform: 'translateX(0)', opacity: 1 }),
      animate('300ms', style({ transform: 'translateX(100%)', opacity: 0 })),
    ]),
  ]),
];
