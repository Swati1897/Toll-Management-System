import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTollComponent } from './add-toll/add-toll.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { TollListComponent } from './toll-list/toll-list.component';
import { VehicleLogComponent } from './vehicle-log/vehicle-log.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTollComponent,
    AddVehicleComponent,
    TollListComponent,
    VehicleLogComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
