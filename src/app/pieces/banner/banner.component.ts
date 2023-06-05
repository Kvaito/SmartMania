import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scrollToEnroll(){
    const el = document.getElementById('enroll_form');
    // @ts-ignore
    el.scrollIntoView({behavior: "smooth"});
  }
}
