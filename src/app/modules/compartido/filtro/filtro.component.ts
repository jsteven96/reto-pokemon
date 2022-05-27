import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent implements OnInit {
  @Output() criterio = new EventEmitter<string>();
  criterioEscrito = '';

  constructor() { }

  ngOnInit(): void {
  }

  emitirCriterio() {
    this.criterio.emit(this.criterioEscrito);
  }
}
