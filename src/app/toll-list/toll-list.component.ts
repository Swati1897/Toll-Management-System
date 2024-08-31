import { Component, OnInit } from '@angular/core';
import { TollServiceService } from '../Services/toll-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-toll-list',
  templateUrl: './toll-list.component.html',
  styleUrls: ['./toll-list.component.css']
})
export class TollListComponent implements OnInit{

  searchTollValue: string ='';
  tolls:any=[];

  show: boolean = false;
  
  constructor(private tollService:TollServiceService,
              private router: Router,
              private currentRouter: ActivatedRoute ){}

  ngOnInit(): void { 
    this.tollService.fetchTolls().subscribe((data:any)=>{
      console.log("fetchToll list", data);

      this.tolls = data;
      console.log("All Tolls", this.tolls);
    })
   }

   //All Data Search
  search(): void {
    // Filter the list of vehicles based on the search term
    if (this.searchTollValue) {
      
      this.tolls = this.tolls.filter((toll: any) =>
        (toll.TollName.toLowerCase().includes(this.searchTollValue.toLowerCase()) ||
        toll.SelectVehicleFare.toString().toLowerCase().includes(this.searchTollValue.toLowerCase()) ||
        toll.SingleJourney.toString().toLowerCase().includes(this.searchTollValue.toLowerCase()) ||
        toll.ReturnJourney.toString().toLowerCase().includes(this.searchTollValue.toLowerCase())) ||
        
        (toll.SelectVehicleFare_2.toString().toLowerCase().includes(this.searchTollValue.toLowerCase()) ||
        toll.SingleJourney_2.toString().toLowerCase().includes(this.searchTollValue.toLowerCase()) ||
        toll.ReturnJourney_2.toString().toLowerCase().includes(this.searchTollValue.toLowerCase())) ||
        
        (toll.SelectVehicleFare_3.toString().toLowerCase().includes(this.searchTollValue.toLowerCase()) ||
        toll.SingleJourney_3.toString().toLowerCase().includes(this.searchTollValue.toLowerCase()) ||
        toll.ReturnJourney_3.toString().toLowerCase().includes(this.searchTollValue.toLowerCase())) ||
        
        (toll.SelectVehicleFare_4.toString().toLowerCase().includes(this.searchTollValue.toLowerCase()) ||
        toll.SingleJourney_4.toString().toLowerCase().includes(this.searchTollValue.toLowerCase()) ||
        toll.ReturnJourney_4.toString().toLowerCase().includes(this.searchTollValue.toLowerCase()))
      );

      // this.show = true ; 

      if(this.tolls.length == 0){
        this.show = true ;
      } else{
        this.show = false; 
      }

    } else {
      // Reset the list when the search term is empty
      this.tollService.fetchTolls().subscribe((data: any) => {
        this.tolls = data;
        console.log("Find", this.tolls); 
        this.show = false ;
      });
    }
  }
 
  onDelete(data : any):void{
    console.log("Delete Tool", data);
    this.tollService.deleteToll(data.id).subscribe((result: any)=>{
      alert("Record Deleted Successfully !!");
    })

    // Reset the list
    this.tollService.fetchTolls().subscribe((data:any)=>{
      console.log("fetchToll list", data);

      this.tolls = data;
      console.log("All Tolls", this.tolls);
    })
    

  }

}
