import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PersonTableComponent } from './person-table/person-table.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { InfoCompComponent } from './info-comp/info-comp.component';


const peopleComp:Routes= [
  {path:"menu",component:MenuComponent},
  {path:"person-table",component:PersonTableComponent},
  {path:"info-comp/:id",component:InfoCompComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    PersonTableComponent,
    MenuComponent,
    InfoCompComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(peopleComp),
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
