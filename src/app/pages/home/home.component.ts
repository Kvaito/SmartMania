import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  showPrice=false

  ngOnInit(): void {
    // this.onEntry()
  }

  closePrice(){
    this.showPrice=false
  }
}
