import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetallesComponent } from './components/detalles/detalles.component';
import { ListCiudadesComponent } from './components/list-ciudades/list-ciudades.component';

const routes: Routes = [
  { path: '', redirectTo: 'list-ciudades', pathMatch: 'full' },
  { path: 'list-ciudades', component: ListCiudadesComponent },
  { path: 'detalles/:id', component: DetallesComponent },
  { path: '**', redirectTo: 'layout', pathMatch: 'full' } //si el usuario entra a una url que no existe
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
