import {Directive} from '@angular/core';

@Directive({
  selector: '[appCardDescriptionText]',
  host: {'class': 'ca-c-card__description-text'},
  standalone: false
})
export class CardDescriptionTextDirective {
}
