import { Component, OnInit, ViewChild, TemplateRef, Inject} from '@angular/core';
import { Propiedad } from '../../class/Propiedad';
import { ModalOptions } from 'ngx-bootstrap/modal/modal-options.class';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('modal') modal: TemplateRef<any>;
  modalRef: BsModalRef;
  config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false
  };
    public propiedades: Array<Propiedad> = [];
    constructor(private modalService: BsModalService) {
        this.obtenerPropiedades();
    }

    ngOnInit() {
    }

    obtenerPropiedades() {
        this.propiedades.push(new Propiedad('Es una pequena casa en por hay', 'edificio1', 'Barrio Los Naranjos', 200000, 10000));
        this.propiedades.push(new Propiedad('Es una gran casa en por hay', 'edificio3', 'Barrio Chijra', 200000, 10000));
        this.propiedades.push(new Propiedad('Es una gran departamento en por hay', 'edificio2', 'Barrio Los Perales', 200000, 10000));
        this.propiedades.push(new Propiedad('Es una pequeno departamento en por hay', 'edificio2', 'Barrio Alto Comedero', 200000, 10000));
        this.propiedades.push(new Propiedad('Es un galpon en por hay', 'edificio4', 'Barrio Ciudad de Nieva', 200000, 10000));
    }
    verModal(modal1: TemplateRef<any>) {
      this.modalRef = this.modalService.show(this.modal, Object.assign({}, this.config, { class: 'gray modal-lg' }));
    }

}
