import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SpinnerComponent } from './spinner/spinner.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxCaptureModule } from 'ngx-capture';
import { FilterListPipe } from './filter-list.pipe';
import { PdfViewerModule } from 'ng2-pdf-viewer';
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



@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    FilterListPipe,
    Pet1AgitatorsComponent,
    Pet2AgitatorsComponent,
    FilterPress1Component,
    FilterPress2Component,
    DpcPumpComponent,
    ContainerConveyorOffComponent,
    RobopackerOffComponent,
    ResealerOffComponent,
    EmptyboxOffComponent,
    PackConveyorOffComponent,
  ],
  imports: [
    Ng2SearchPipeModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    NgxCaptureModule,
    PdfViewerModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
