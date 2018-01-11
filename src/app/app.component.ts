import { Component, OnInit } from '@angular/core';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent {

  title = 'Kovi';
  array:any[];
  tabledata: any[];
  selected = [];

  columns = [
    {name: 'Name', prop: 'name'},
    {name: 'Gender', prop: 'gender'},
    {name: 'Company', prop: 'company'},
    {name: 'Age', prop: 'age'},
    
  ]

  constructor(private data: DataService){
    this.tabledata = this.data.getdata();
  }

  ngOnInit(){
    this.array = this.data.soucres;
  }



}
