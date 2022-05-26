import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SharedFormService {

  constructor(private constructorFormulario: FormBuilder) { }

  formularioCompartido(): FormGroup {
    const grupoFormulario = this.constructorFormulario.group({
      usuario: ['', Validators.required],
      contrasenia: ['', Validators.required]
    });
    return grupoFormulario;
  }
}
