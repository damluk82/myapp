import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  sources: Array<any>;
  data = [
    {
        "name": "Ethel Price",
        "gender": "female",
        "company": "Johnson, Johnson and Partners, LLC CMP DDC",
        "age": 22
    },
    {
        "name": "Claudine Neal",
        "gender": "female",
        "company": "Sealoud",
        "age": 55
    },
    {
        "name": "Beryl Rice",
        "gender": "female",
        "company": "Velity",
        "age": 67
    },
    {
        "name": "Wilder Gonzales",
        "gender": "male",
        "company": "Geekko"
    },
    {
        "name": "Georgina Schultz",
        "gender": "female",
        "company": "Suretech"
    }]



  constructor(){
    this.sources = [
    {href: "https://angular.io/tutorial", name: "Tour of Heroes"},
    {href: "https://github.com/angular/angular-cli/wiki", name: "CLI Documentation"},
    {href: "https://blog.angular.io/",name: "Angular blog"}
  ]}

get soucres(){
  return this.sources;
}

getdata(){
  return this.data;
}

}
