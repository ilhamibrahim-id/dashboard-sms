import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { PdmDashboardComponent } from './pdm-dashboard/pdm-dashboard.component';
import { AmMOci1Component } from './am-m-oci1/am-m-oci1.component';
import { AmMOci2Component } from './am-m-oci2/am-m-oci2.component';
import { AmMFsbComponent } from './am-m-fsb/am-m-fsb.component';
import { PdmMOci1Component } from './pdm-m-oci1/pdm-m-oci1.component';
import { PdmMOci2Component } from './pdm-m-oci2/pdm-m-oci2.component';
import { PdmMFsbComponent } from './pdm-m-fsb/pdm-m-fsb.component';
import { AppsLinkComponent } from './apps-link/apps-link.component';
import { Big5Component } from './big5/big5.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddNodeComponent } from './add-node/add-node.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'pdm_dashboard', component: PdmDashboardComponent},
  {path: 'am_m_oci1',component: AmMOci1Component},
  {path: 'am_m_oci2',component: AmMOci2Component},
  {path: 'am_m_fsb',component: AmMFsbComponent},
  {path: 'pdm_m_oci1',component: PdmMOci1Component},
  {path: 'pdm_m_oci2',component: PdmMOci2Component},
  {path: 'pdm_m_fsb',component: PdmMFsbComponent},
  {path: 'apps_link', component: AppsLinkComponent},
  {path: 'big5', component: Big5Component},
  {path: 'addnode', component: AddNodeComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [
  DashboardComponent,
  PdmDashboardComponent,
  AmMOci1Component,
  AmMOci2Component,
  AmMFsbComponent,
  PdmMOci1Component,
  PdmMOci2Component,
  PdmMFsbComponent,
  AppsLinkComponent,
  Big5Component
]
