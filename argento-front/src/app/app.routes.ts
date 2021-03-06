import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PropiedadesComponent } from './components/propiedades/propiedades.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { AddClienteComponent } from './components/add-cliente/add-cliente.component';





const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'propiedades', component: PropiedadesComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'nuevo-cliente', component: AddClienteComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
