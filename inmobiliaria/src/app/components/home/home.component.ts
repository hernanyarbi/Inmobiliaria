import { Component, OnInit } from '@angular/core';
import { Propiedad } from '../../class/Propiedad';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public propiedades:Array<Propiedad> = [];
  constructor() { 
    this.obtenerPropiedades();
  }

  ngOnInit() {
  }

  obtenerPropiedades(){
    this.propiedades.push(new Propiedad('Es una pequena casa en por hay','edificio1','Barrio Los Naranjos',200000,10000));
    this.propiedades.push(new Propiedad('Es una gran casa en por hay','edificio3','Barrio Chijra',200000,10000));
    this.propiedades.push(new Propiedad('Es una gran departamento en por hay','edificio2','Barrio Los Perales',200000,10000));
    this.propiedades.push(new Propiedad('Es una pequeno departamento en por hay','edificio2','Barrio Alto Comedero',200000,10000));
    this.propiedades.push(new Propiedad('Es un galpon en por hay','edificio4','Barrio Ciudad de Nieva',200000,10000));
  }
  


}
