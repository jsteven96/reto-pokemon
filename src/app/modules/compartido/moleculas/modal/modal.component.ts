import { ModalConfig } from '../../../../models/modal-config.model';
import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() modalConfig: ModalConfig | any;
  @ViewChild('modal', {static: true}) contenidoModal: TemplateRef<ModalComponent> | any;
  private modalRef: NgbModalRef | any;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  abrir(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      this.modalRef = this.modalService.open(this.contenidoModal);
      this.modalRef.result.then(resolve, resolve);
    })
  }

  async cerrar(): Promise<void> {
    if (this.modalConfig.deberiaCerrar === undefined || (await this.modalConfig.deberiaCerrar())) {
      const resultado = this.modalConfig.alCerrar === undefined || (await this.modalConfig.alCerrar());
      this.modalRef.close(resultado);
    }
  }

  async descartar(): Promise<void> {
    if(this.modalConfig.deberiaDescartar === undefined || (await this.modalConfig.deberiaDescartar())) {
      const resultado = this.modalConfig.alDescartar === undefined || (await this.modalConfig.alDescartar());
      this.modalRef.dismiss(resultado);
    }
  }

}
