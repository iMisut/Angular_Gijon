import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PadreComponent implements OnInit {

  public nombre: string;
  constructor() { }

  ngOnInit() {
  }

  respuestaAlHijo(nuevoNombre: string) {
    this.nombre = nuevoNombre;
  }
}
