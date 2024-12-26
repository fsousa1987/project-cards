import {Directive} from '@angular/core';

@Directive({
  selector: '[appCardLargeIcon]',
  host: {'class': 'ca-c-card__large-icon'},
  standalone: false
})
export class CardLargeIconDirective {
}
