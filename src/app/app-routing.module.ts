import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTollComponent } from './add-toll/add-toll.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { TollListComponent } from './toll-list/toll-list.component';
import { VehicleLogComponent } from './vehicle-log/vehicle-log.component';

const routes: Routes = [
    { path:'', component:VehicleLogComponent, pathMatch:'full'},
      
      { path:'vehicle-log', component:VehicleLogComponent, children:[
          {path:'add-vehicle', component:AddVehicleComponent },
          {path:'add-toll', component:AddTollComponent },
    ]},

    { path:'toll-list', component:TollListComponent , children:[
      {path:'add-toll', component:AddTollComponent },
    ]},
  ]
  
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
