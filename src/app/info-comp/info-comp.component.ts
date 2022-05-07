import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { InfoServService } from '../service/info-serv.service';

@Component({
  selector: 'app-info-comp',
  templateUrl: './info-comp.component.html',
  styleUrls: ['./info-comp.component.css']
})
export class InfoCompComponent implements OnInit {

  insideInfo:any ={};

  id:number = 0;

  constructor(private singlePerson:InfoServService,private _active:ActivatedRoute ) {
    this._active.params.subscribe((params)=>{
      this.id = params['id']
    
    })

    this.insideInfo = singlePerson.getOnePerson(this.id).subscribe((_id:any)=>{
      this.insideInfo = _id;
    })
  
   }

  ngOnInit(): void {
  }


}
