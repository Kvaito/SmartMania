import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollTo(id:string){
    const el = document.getElementById(id);
    // @ts-ignore
    el.scrollIntoView({behavior: "smooth"});
  }
}
