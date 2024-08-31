import { Component, OnInit } from '@angular/core';
import { VehicleServiceService } from '../Services/vehicle-service.service';

@Component({
  selector: 'app-vehicle-log',
  templateUrl: './vehicle-log.component.html',
  styleUrls: ['./vehicle-log.component.css']
})
export class VehicleLogComponent implements OnInit {
  
  searchValue: string = '';
  searchAllValue: string ='';

  vehicles: any=[];
  filterkey : any=[];

  show : boolean = true;

  constructor(private vehicleService : VehicleServiceService ){ }
  
  ngOnInit(): void {
    this.vehicleService.fetchVehicles().subscribe((data:any)=>{
      console.log('FetchVehicle All list..', data);
      this.vehicles = data;
      this.filterkey = data ;
      console.log("Vehicle", this.vehicles);
    });
  }

//All data Serach 
  search(): void {
    if (this.searchValue) {
      this.vehicles = this.vehicles.filter( (vehicle:any) =>
        vehicle.selectVehicleType.toLowerCase().includes(this.searchValue.toLowerCase()) ||
        vehicle.vehicleNumber.toLowerCase().includes(this.searchValue.toLowerCase()) ||
        vehicle.selectTollName.toLowerCase().includes(this.searchValue.toLowerCase()) ||
        vehicle.tariff.toString().toLowerCase().includes(this.searchValue.toLowerCase())
      );
      console.log('Filtered Vehicles:', this.vehicles);

    } else {
      this.vehicles = [];
      console.log('Vehicles Reset:', this.vehicles);
    }

  }

  Allsearch(){
    if (this.searchAllValue) {
      this.vehicles = this.vehicles.filter( (vehicle:any) =>
        vehicle.selectVehicleType.toLowerCase().includes(this.searchAllValue.toLowerCase()) ||
        vehicle.vehicleNumber.toLowerCase().includes(this.searchAllValue.toLowerCase()) ||
        vehicle.selectTollName.toLowerCase().includes(this.searchAllValue.toLowerCase()) ||
        vehicle.tariff.toString().toLowerCase().includes(this.searchAllValue.toLowerCase()));
      console.log('Alllll....Vehicles:', this.vehicles);
    } else {
      this.vehicles = [];
      console.log('All Reset:', this.vehicles);
    }
  }

  filterByLocation(location: string): void {
    if (location === 'All') {
      this.vehicles; 
     }else {
      this.vehicles = this.filterkey.filter((vehicle: any) =>
        vehicle.selectTollName.toLowerCase() === location.toLowerCase());
    }
    console.log('Filtered Vehicles:', this.vehicles);
  }

  


}

  

  
