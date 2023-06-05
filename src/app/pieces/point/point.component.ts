import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.scss']
})
export class PointComponent implements OnInit {

  constructor() { }

  points=[
    {
      imgPath:'../../../assets/images/pointLETO.png',
      address:'ТРЦ Лето, Нахимова, 8 ст13',
      workingTimeStart:'10:00',
      workingTimeEnd:'20:00',
      phone:'+7‒923‒416‒66‒61'
    },
    {
      imgPath:'../../../assets/images/pointManege.png',
      address:'Беринга 10, 2 этаж',
      workingTimeStart:'10:00',
      workingTimeEnd:'21:00',
      phone:'+7‒923‒426‒66‒60'
    }
  ]

  ngOnInit(): void {
  }

}
