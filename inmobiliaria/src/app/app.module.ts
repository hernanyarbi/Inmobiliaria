import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//routes
import { APP_ROUTING } from './app.routes';

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PropiedadesComponent } from './components/propiedades/propiedades.component';
import { ClienteComponent } from './components/cliente/cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PropiedadesComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
