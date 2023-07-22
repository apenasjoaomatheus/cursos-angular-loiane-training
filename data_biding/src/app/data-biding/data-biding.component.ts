import { Component } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent {

  url = 'htpp://whatsapp.com'

  urlImage = 'http://lorempixel.com.br/300/400';

  cursoAngular = true;

  constructor() {}

  getValor() {
    return 6
  }

  getCursosZap() {
    return true
  }

}
