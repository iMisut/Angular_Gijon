import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-expresiones',
  templateUrl: './expresiones.component.html',
  styleUrls: ['./expresiones.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ExpresionesComponent implements OnInit {

  sNombre: string;
  nValor: number;

  constructor() { }

  ngOnInit() {
    this.sNombre = 'Ivan';
    this.nValor = 34;
  }

}
