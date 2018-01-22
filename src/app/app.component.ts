import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent {

  form;
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
    this.form = new FormGroup({
      date: new FormControl('', Validators.pattern('[\\w\\-\\s\\/]+'))  //illegal special characters
      
      // '^(\d{1,2}).(\d{1,2}).(\d{4})$'
      //date: new FormControl('', Validators.pattern('[\\w\\-\\s\\/]+'))
//      date: new FormControl('', Validators.pattern('^(\d{1,2}).(\d{1,2}).(\d{4})$'))
    })
  }

  onSubmit(form){
    console.log(form);
  }


}
