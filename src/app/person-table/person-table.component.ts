import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoServService } from '../service/info-serv.service';

@Component({
  selector: 'app-person-table',
  templateUrl: './person-table.component.html',
  styleUrls: ['./person-table.component.css']
})
export class PersonTableComponent implements OnInit {

  info:any= [];

  constructor(private _info:InfoServService) {
    this.info = _info.getInfo().subscribe((i:any)=>{
      this.info = i;
    })
   }

  ngOnInit(): void {
  }


 
}
