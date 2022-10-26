import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  
  @Input() title : String = ''
  @Input() region : String = ''
  @Input() imgsrc : String = ''
  @Input() population : number = -1

  constructor() {
    
  }

  ngOnInit(): void {
   
  }

  showPopulation(){
    alert(this.population)
  }

}
