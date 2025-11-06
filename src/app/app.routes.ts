import { Routes } from '@angular/router';
import { ApiComponent } from './hijos/api/api.component';

export const routes: Routes = [
  { path: 'api', component: ApiComponent },
  { path: '', redirectTo: 'api', pathMatch: 'full' }
];
