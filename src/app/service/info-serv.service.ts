import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InfoServService {

  private readonly fullInfoTable:string = 'https://fakestoreapi.com/users';



  constructor(private _http:HttpClient ) { }

  getInfo(){
    return this._http.get(`${this.fullInfoTable}`);
  }

  getOnePerson(id:any){
    return this._http.get(`${this.fullInfoTable}/${id}`)
  }

 

}
