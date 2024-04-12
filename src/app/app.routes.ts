import { Routes } from '@angular/router';
import { InicioComponent } from './Component/inicio/inicio.component';
import { AnimalesComponent } from './Component/animales/animales.component';
import { DuenosComponent } from './Component/duenos/duenos.component';
import { VacunacionesComponent } from './Component/vacunaciones/vacunaciones.component';

import { PelajeComponent } from './Component/pelaje/pelaje.component';

export const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
  },
  {
    path: 'Animales',
    component: AnimalesComponent,
  },
  {
    path: 'Dueños',
    component: DuenosComponent,
  },
  {
    path: 'Pelajes',
    component: PelajeComponent,
  },
  {
    path: 'Vacunaciones',
    component: VacunacionesComponent,
  },
];
