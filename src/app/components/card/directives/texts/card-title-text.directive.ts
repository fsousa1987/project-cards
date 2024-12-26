import {Directive} from '@angular/core';

@Directive({
  selector: '[appCardTitleText]',
  host: {'class': 'ca-c-card__title-text'},
  standalone: false
})
export class CardTitleTextDirective {
}
