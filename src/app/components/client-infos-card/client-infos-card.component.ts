import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-client-infos-card',
  standalone: false,

  templateUrl: './client-infos-card.component.html',
  styleUrl: './client-infos-card.component.scss'
})
export class ClientInfosCardComponent implements OnInit {
  headerColor: string = 'blue';

  ngOnInit(): void {
    setTimeout(() => {
      this.headerColor = 'red';
    }, 3000)
  }
}
