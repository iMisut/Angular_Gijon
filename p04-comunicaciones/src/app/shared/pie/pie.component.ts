import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PieComponent implements OnInit {

  public sAutor: string;
  public sLugar: string;
  constructor() { }

  ngOnInit() {
    this.sAutor = 'Ivan';
    this.sLugar = 'Gijon';
  }

}
