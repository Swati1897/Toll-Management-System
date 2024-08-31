import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import{ rxjs } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehicleServiceService {

    private vehicleUrl: string = 'http://localhost:3000/Add_New_Entry';
    
  constructor(private http: HttpClient) { }

  addVehicle(vehicleBody:any){
    return this.http.post(`${this.vehicleUrl}`, vehicleBody);
  }


  fetchVehicles(){
    return this.http.get(`${this.vehicleUrl}`,{
      headers:{
        'content-type': 'application/json',
      }
    })
  }



  
}
