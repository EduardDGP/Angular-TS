import { Routes } from '@angular/router';
import { ActualizacionComponent } from './post/actualizacion/actualizacion.component';
import { CreacionComponent } from './post/creacion/creacion.component';
import { ListadoComponent } from './post/listado/listado.component';
import { VistaIndiviadualComponent } from './post/vista-indiviadual/vista-indiviadual.component';

export const routes: Routes = [
  { path: 'actualizacion', component: ActualizacionComponent },
  { path: 'creacion', component: CreacionComponent },
  { path: '', component: ListadoComponent },
  { path: 'vistaIndividual', component: VistaIndiviadualComponent }
];
