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
import { GamesComponent } from './games/games.component';
import { SuitComponent } from './suit/suit.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { OilComponent } from './kluber/oil/oil.component';
import { GreaseComponent } from './kluber/grease/grease.component';
import { SpraysComponent } from './kluber/sprays/sprays.component';
import { MaintenanceproductComponent } from './kluber/maintenanceproduct/maintenanceproduct.component';
import { PasteComponent } from './kluber/paste/paste.component';
import { Petline1Component } from './kluberplant/petline1/petline1.component';
import { Petline2Component } from './kluberplant/petline2/petline2.component';
import { PreparationroomComponent } from './kluberplant/preparationroom/preparationroom.component';
import { OfflinepackingComponent } from './kluberplant/offlinepacking/offlinepacking.component';
import { InjectionMolderComponent } from './kluberplant/petline1/injection-molder/injection-molder.component';
import { BottleShowerComponent } from './kluberplant/petline1/bottle-shower/bottle-shower.component';
import { FillerComponent } from './kluberplant/petline1/filler/filler.component';
import { ContainerConveyorComponent } from './kluberplant/petline1/container-conveyor/container-conveyor.component';
import { LabellerComponent } from './kluberplant/petline1/labeller/labeller.component';
import { DividerComponent } from './kluberplant/petline1/divider/divider.component';
import { SheetFeederComponent } from './kluberplant/petline1/sheet-feeder/sheet-feeder.component';
import { ShrinkTrayComponent } from './kluberplant/petline1/shrink-tray/shrink-tray.component';
import { PackConveyorComponent } from './kluberplant/petline1/pack-conveyor/pack-conveyor.component';
import { PalletConveyorComponent } from './kluberplant/petline1/pallet-conveyor/pallet-conveyor.component';
import { PalletiserComponent } from './kluberplant/petline1/palletiser/palletiser.component';
import { PackRollerConveyorsComponent } from './kluberplant/petline1/pack-roller-conveyors/pack-roller-conveyors.component';
import { SanyuComponent } from './kluberplant/petline1/sanyu/sanyu.component';
import { KronesComponent } from './kluberplant/petline1/krones/krones.component';
import { ColorcodeComponent } from './kluber/colorcode/colorcode.component';
import { Injectionmolderpt2Component } from './kluberplant/petline2/injectionmolderpt2/injectionmolderpt2.component';
import { Bottleblowerpt2Component } from './kluberplant/petline2/bottleblowerpt2/bottleblowerpt2.component';
import { Fillerpt2Component } from './kluberplant/petline2/fillerpt2/fillerpt2.component';
import { Conveyorpt2Component } from './kluberplant/petline2/conveyorpt2/conveyorpt2.component';
import { Labellerpt2Component } from './kluberplant/petline2/labellerpt2/labellerpt2.component';
import { Sanyudividerpt2Component } from './kluberplant/petline2/sanyudividerpt2/sanyudividerpt2.component';
import { Caserpt2Component } from './kluberplant/petline2/caserpt2/caserpt2.component';
import { Sheetfeederpt2Component } from './kluberplant/petline2/sheetfeederpt2/sheetfeederpt2.component';
import { Packconveyorpt2Component } from './kluberplant/petline2/packconveyorpt2/packconveyorpt2.component';
import { Palletconveyorpt2Component } from './kluberplant/petline2/palletconveyorpt2/palletconveyorpt2.component';
import { Palletiserpt2Component } from './kluberplant/petline2/palletiserpt2/palletiserpt2.component';
import { Pet1AgitatorsComponent } from './kluberplant/preparationroom/pet1-agitators/pet1-agitators.component';
import { Pet2AgitatorsComponent } from './kluberplant/preparationroom/pet2-agitators/pet2-agitators.component';
import { FilterPress1Component } from './kluberplant/preparationroom/filter-press1/filter-press1.component';
import { FilterPress2Component } from './kluberplant/preparationroom/filter-press2/filter-press2.component';
import { DpcPumpComponent } from './kluberplant/preparationroom/dpc-pump/dpc-pump.component';
import { ContainerConveyorOffComponent } from './kluberplant/offlinepacking/container-conveyor-off/container-conveyor-off.component';
import { RobopackerOffComponent } from './kluberplant/offlinepacking/robopacker-off/robopacker-off.component';
import { ResealerOffComponent } from './kluberplant/offlinepacking/resealer-off/resealer-off.component';
import { EmptyboxOffComponent } from './kluberplant/offlinepacking/emptybox-off/emptybox-off.component';
import { PackConveyorOffComponent } from './kluberplant/offlinepacking/pack-conveyor-off/pack-conveyor-off.component';
import { OxoniaComponent } from './kluberplant/preparationroom/oxonia/oxonia.component';

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
  {path: 'games', component: GamesComponent},
  {path: 'suit', component: SuitComponent},
  {path: 'tictactoe', component: TicTacToeComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'oil', component: OilComponent},
  {path: 'grease', component: GreaseComponent},
  {path: 'sprays', component: SpraysComponent},
  {path: 'maintenanceproduct', component: MaintenanceproductComponent},
  {path: 'paste', component: PasteComponent},
  {path: 'petline1', component: Petline1Component},
  {path: 'petline2', component: Petline2Component},
  {path: 'preparationroom', component: PreparationroomComponent},
  {path: 'offlinepacking', component: OfflinepackingComponent},
  {path: 'injectionmolder', component: InjectionMolderComponent},
  {path: 'bottleshower', component: BottleShowerComponent},
  {path: 'filler', component: FillerComponent},
  {path: 'containerconveyor', component: ContainerConveyorComponent},
  {path: 'labeller', component: LabellerComponent},
  {path: 'divider', component: DividerComponent},
  {path: 'sheetfeeder', component: SheetFeederComponent},
  {path: 'shrinktray', component: ShrinkTrayComponent},
  {path: 'packconveyor', component: PackConveyorComponent},
  {path: 'palletconveyor', component: PalletConveyorComponent},
  {path: 'palletiser', component: PalletiserComponent},
  {path: 'packrollerconveyor', component: PackRollerConveyorsComponent},
  {path: 'sanyu', component: SanyuComponent},
  {path: 'krones', component: KronesComponent},
  {path: 'colorcode', component: ColorcodeComponent},
  {path: 'injectmolderpt2', component: Injectionmolderpt2Component},
  {path: 'bottleblowerpt2', component: Bottleblowerpt2Component},
  {path: 'fillerpt2', component: Fillerpt2Component},
  {path: 'conveyorpt2', component: Conveyorpt2Component},
  {path: 'labellerpt2', component: Labellerpt2Component},
  {path: 'sanyudividerpt2', component: Sanyudividerpt2Component},
  {path: 'caserpt2', component: Caserpt2Component},
  {path: 'sheetfeederpt2', component: Sheetfeederpt2Component},
  {path: 'packconveyorpt2', component: Packconveyorpt2Component},
  {path: 'palletconveyorpt2', component: Palletconveyorpt2Component},
  {path: 'palletiserpt2', component: Palletiserpt2Component},
  {path: 'pet1', component: Pet1AgitatorsComponent},
  {path: 'pet2', component: Pet2AgitatorsComponent},
  {path: 'filterpress1', component: FilterPress1Component},
  {path: 'filterpress2', component: FilterPress2Component},
  {path: 'dpcpump', component: DpcPumpComponent},
  {path: 'oxonia', component: OxoniaComponent},
  {path: 'containeroffline', component: ContainerConveyorOffComponent},
  {path: 'robopacker', component: RobopackerOffComponent},
  {path: 'resealeroff', component: ResealerOffComponent},
  {path: 'emptybox', component: EmptyboxOffComponent},
  {path: 'packconveyoroff', component: PackConveyorOffComponent},
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
  Big5Component,
  SuitComponent,
  TicTacToeComponent,
  GamesComponent,
  AboutusComponent,
  OilComponent,
  GreaseComponent,
  SpraysComponent,
  MaintenanceproductComponent,
  PasteComponent,
  Petline1Component,
  Petline2Component,
  PreparationroomComponent,
  OfflinepackingComponent,
  InjectionMolderComponent,
  BottleShowerComponent,
  FillerComponent,
  ContainerConveyorComponent,
  LabellerComponent,
  DividerComponent,
  SheetFeederComponent,
  ShrinkTrayComponent,
  PackConveyorComponent,
  PalletConveyorComponent,
  PalletiserComponent,
  PackRollerConveyorsComponent,
  SanyuComponent,
  KronesComponent,
  ColorcodeComponent,
  Injectionmolderpt2Component,
  Bottleblowerpt2Component,
  Fillerpt2Component,
  Conveyorpt2Component,
  Labellerpt2Component,
  Sanyudividerpt2Component,
  Caserpt2Component,
  Sheetfeederpt2Component,
  Packconveyorpt2Component,
  Palletconveyorpt2Component,
  Palletiserpt2Component,
  Pet1AgitatorsComponent,
  Pet2AgitatorsComponent,
  FilterPress1Component ,
  FilterPress2Component ,
  DpcPumpComponent,
  ContainerConveyorOffComponent,
  RobopackerOffComponent,
  ResealerOffComponent,
  EmptyboxOffComponent,
  PackConveyorOffComponent,
  OxoniaComponent
]
