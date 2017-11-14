import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LocalComponent implements OnInit {

  @ViewChild('localNombre') accesoInput: ElementRef;
  constructor() { }

  ngOnInit() {
    console.log(this.accesoInput);
  }

}
