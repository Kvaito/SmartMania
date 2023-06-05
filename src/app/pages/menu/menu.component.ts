import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollTo(id:string){
    const el = document.getElementById(id);
    // @ts-ignore
    el.scrollIntoView({behavior: "smooth"});
  }

}
