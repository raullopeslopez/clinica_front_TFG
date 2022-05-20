import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddConsultaComponent } from './consultas/add-consulta/add-consulta.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { DashboardComponent } from './dashboard.component';
import { AddFacturaComponent } from './facturacion/add-factura/add-factura.component';
import { FacturacionNutricionistaMensualComponent } from './facturacion/facturacion-nutricionista-mensual/facturacion-nutricionista-mensual.component';
import { FacturacionComponent } from './facturacion/facturacion.component';
import { InicioComponent } from './inicio/inicio.component';
import { AddNutricionistaComponent } from './nutricionista/add-nutricionista/add-nutricionista.component';
import { DetailNutricionistaComponent } from './nutricionista/detail-nutricionista/detail-nutricionista.component';
import { EditNutricionistaComponent } from './nutricionista/edit-nutricionista/edit-nutricionista.component';

import { NutricionistaComponent } from './nutricionista/nutricionista.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children:
  [
    { path:'', component:InicioComponent},
    { path:'consultas', component: ConsultasComponent},
    { path:'facturacion', component: FacturacionComponent},
    { path:'nutricionistas', component:NutricionistaComponent},
    { path:'add-nutricionista', component:AddNutricionistaComponent},
    { path:'detail-nutricionista/:idNutricionista', component:DetailNutricionistaComponent},
    { path:'edit-nutricionista/:idNutricionista', component:EditNutricionistaComponent},
    { path:'add-consulta', component:AddConsultaComponent},
    { path:'add-factura', component:AddFacturaComponent},
    { path:'facturacion-nutricionista-mensual/:idNutricionista', component:FacturacionNutricionistaMensualComponent},
  ]
 }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
