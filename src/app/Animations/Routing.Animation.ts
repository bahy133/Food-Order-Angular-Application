import { trigger, transition, style, animate } from '@angular/animations';
export const routingAn = trigger('routing', [
  transition('*<=>*', [
    style({ opacity: 0, transfom: 'translateX(30)' }),
    animate('1000ms', style({ opacity: 1, transfom: 'translateX(0)' })),
  ]),
]);
