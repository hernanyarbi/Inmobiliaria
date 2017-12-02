import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CarouselModule } from 'ngx-bootstrap/carousel';

// routes
import { APP_ROUTING } from './app.routes';

// components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PropiedadesComponent } from './components/propiedades/propiedades.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { AltaPropiedadComponent } from './components/alta-propiedad/alta-propiedad.component';
import { AddClienteComponent } from './components/add-cliente/add-cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PropiedadesComponent,
    ClienteComponent,
    AltaPropiedadComponent,
    AddClienteComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
