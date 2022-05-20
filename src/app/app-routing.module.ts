import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditConsultaComponent } from './components/dashboard/consultas/edit-consulta/edit-consulta.component';
import { InfoConsultaFechaComponent } from './components/dashboard/consultas/info-consulta-fecha/info-consulta-fecha.component';
import { InfoConsultaComponent } from './components/dashboard/consultas/info-consulta/info-consulta.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'info-consulta', component: InfoConsultaComponent },
  {
    path: 'info-consulta-fecha/:id/:fecha',
    component: InfoConsultaFechaComponent,
  },
  { path: 'edit-consulta', component: EditConsultaComponent },
  // Lazy loading: se cargan los componentes necesarios
  // a medida que el UX los demande al navegar en la app
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./components/dashboard/dashboard.module').then(
        (x) => x.DashboardModule
      ),
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppRoutingModule {}
