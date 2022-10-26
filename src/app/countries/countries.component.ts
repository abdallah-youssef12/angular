import { Component, OnInit } from '@angular/core';
import { Country } from '../Classes/Countries';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  constructor() { }

  Countries : Country[] = [];

  ngOnInit(): void {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(json => json.forEach((country : any) => {
       let c1 = new Country();
       c1.title = country.name.common;
       c1.region = country.region;
       c1.imgsrc = country.flags.png;
       c1.population = country.population;
       this.Countries.push(c1);
    }))
  }


}
