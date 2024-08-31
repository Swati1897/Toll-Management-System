import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TollServiceService {

  private tollUrl: string = 'http://localhost:3000/Add_New_Toll'

  constructor(private http: HttpClient) { }

  addTolls(tollBody:any){
    return this.http.post(`${this.tollUrl}`, tollBody)
  }

  fetchTolls(){
    return this.http.get(`${this.tollUrl}`,{
      headers:{
        'content-type': 'application/json',
      }
    })
  }

  deleteToll(id :number){
    return this.http.delete(`${this.tollUrl}/${id}`)
  }

}
