import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VehicleServiceService } from '../Services/vehicle-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit{
  isPopupOpen = true;

  vehicleResult: any=[];
  vehicleValue1: string = '';
   
  AddVehicleForm: FormGroup;
  
  constructor( private formBuilder: FormBuilder, 
              private vehicleService: VehicleServiceService,
              private router: Router,
              private currentRouter: ActivatedRoute){
      
          this.AddVehicleForm = this.formBuilder.group({
            selectTollName:[''],
            selectVehicleType:[''],
            vehicleNumber:[''],
            tariff:['']
          });
        }
  
  ngOnInit(): void { }

  onFormSubmit(){
    console.log('Form', this.AddVehicleForm.value);

    const body={
      selectTollName: this.AddVehicleForm.value.selectTollName,
      selectVehicleType: this.AddVehicleForm.value.selectVehicleType,
      vehicleNumber: this.AddVehicleForm.value.vehicleNumber,
      tariff: this.AddVehicleForm.value.tariff,
      AddDateAndTime: new Date()
    };

    this.vehicleService.addVehicle(body).subscribe((data: any)=>{
      console.log("AddVehicle data...", data);
      this.vehicleResult = data;
      
      console.log("VehicleResult", this.vehicleResult);

      this.showMessage();
      this.router.navigate(['./vehicle-log'], {relativeTo:this.currentRouter })
    },
        (error)=>{
          console.log("Error !!!", error);
        });
    
    }

    showMessage():void{
      alert("Vehicle Added Success...!");
      this.closePopup();
    }

    selectRate(event :any){
        console.log(event.target.value);
        // Single 
        switch(event.target.value){
          case "Car/Jeep/Van" :
            this.vehicleValue1 = "60" 
                break;
          case "LCV" :  
          this.vehicleValue1 = "95" 
                break;
          case "Truck/Bus" : 
          this.vehicleValue1 = "205" 
                break;
          case "Heavy vehicle":
            this.vehicleValue1 = "320" 
                break;
          }
      }

      OpenPopup() {
        this.isPopupOpen = true;
      } 
      closePopup(){
        this.isPopupOpen = false;
      }
      
      

}
