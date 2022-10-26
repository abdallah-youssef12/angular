import { Component, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
 @Output() search : String = ''
  constructor() { }

  ngOnInit(): void {
  }

}
