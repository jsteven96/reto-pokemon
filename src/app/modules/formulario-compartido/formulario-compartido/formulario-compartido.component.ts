import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-compartido',
  templateUrl: './formulario-compartido.component.html',
  styleUrls: ['./formulario-compartido.component.scss']
})
export class FormularioCompartidoComponent implements OnInit {

  @Input() grupoPadre: FormGroup | any;

  constructor() { }

  ngOnInit(): void {
  }

}
