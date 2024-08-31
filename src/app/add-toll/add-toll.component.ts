import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TollServiceService } from '../Services/toll-service.service';

@Component({
  selector: 'app-add-toll',
  templateUrl: './add-toll.component.html',
  styleUrls: ['./add-toll.component.css']
})
export class AddTollComponent implements OnInit {
  isPopupOpen = true;

  TollResult: any=[];

  TollFrom:FormGroup;

  constructor(private formBuilder: FormBuilder,
              private tollService: TollServiceService,
              private router: Router,
              private currentRouter: ActivatedRoute ){

                this.TollFrom = this.formBuilder.group({
                  TollName:[''],

                  SelectVehicleFare:[''],
                  SingleJourney:[''],
                  ReturnJourney:[''],

                  SelectVehicleFare_2:[''],
                  SingleJourney_2:[''],
                  ReturnJourney_2:[''],

                  SelectVehicleFare_3:[''],
                  SingleJourney_3:[''],
                  ReturnJourney_3:[''],

                  SelectVehicleFare_4:[''],
                  SingleJourney_4:[''],
                  ReturnJourney_4:[''],
                });
              }
  
  ngOnInit(): void {  }

  onTollFormSubmit(){
    console.log("Toll From", this.TollFrom.value);

    const body={
      TollName: this.TollFrom.value.TollName,
                  
      SelectVehicleFare: this.TollFrom.value.SelectVehicleFare,
      SingleJourney: this.TollFrom.value.SingleJourney,
      ReturnJourney: this.TollFrom.value.ReturnJourney,
       

      SelectVehicleFare_2: this.TollFrom.value.SelectVehicleFare_2,
      SingleJourney_2: this.TollFrom.value.SingleJourney_2,
      ReturnJourney_2: this.TollFrom.value.ReturnJourney_2,
      

      SelectVehicleFare_3: this.TollFrom.value.SelectVehicleFare_3,
      SingleJourney_3: this.TollFrom.value.SingleJourney_3,
      ReturnJourney_3: this.TollFrom.value.ReturnJourney_3,
      

      SelectVehicleFare_4: this.TollFrom.value.SelectVehicleFare_4,
      SingleJourney_4: this.TollFrom.value.SingleJourney_4,
      ReturnJourney_4: this.TollFrom.value.ReturnJourney_4,
       
};

    this.tollService.addTolls(body).subscribe((data:any)=>{
      console.log("AddToll", data);

      this.TollResult = data;
      console.log("TollResult", this.TollResult);

      this.showMessage();
      // this.resetForm();  
      this.router.navigate(['/toll-list'], {relativeTo:this.currentRouter});
    },
      (error)=>{
        console.log("Error !!", error)
      });
  }

  showMessage():void{
    alert("Toll Added Success!!");
    this.closePopup();
  }

  // resetForm(): void {
  //   this.TollFrom.reset();
  //   this.closePopup();
  // }

  OpenPopup() {
    this.isPopupOpen = true;
  }

  closePopup(){
    this.isPopupOpen = false;
  }
  

}
