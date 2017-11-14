import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HijoComponent implements OnInit {
  @Input() hijoNombre: string;
  @Output() emitNo: EventEmitter<string> = new EventEmitter<string>();

  public hijoNuevoNombre: string;
  constructor() { }

  ngOnInit() {
  }

  btnNoMeGusta() {
    this.emitNo.emit(this.hijoNuevoNombre);
  }
}
