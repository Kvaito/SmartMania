import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guarantee',
  templateUrl: './guarantee.component.html',
  styleUrls: ['./guarantee.component.scss']
})
export class GuaranteeComponent implements OnInit {

  constructor() { }
  options = {
    threshold: [0.5] };
  observerLeft = new IntersectionObserver(this.onEntryLeft, this.options);
  observerRight = new IntersectionObserver(this.onEntryRight, this.options);
  ngOnInit(): void {
   let elementsLeft = document.querySelectorAll('.slideLeft');
   let elementsRight = document.querySelectorAll('.slideRight');
    // @ts-ignore
    for (let elm of elementsLeft) {
      this.observerLeft.observe(elm);
    }
    // @ts-ignore
    for (let elm of elementsRight) {
      this.observerRight.observe(elm);
    }
  }

  onEntryLeft(entry: any[]) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('slideLeftShow');
      }
    });
  }
  onEntryRight(entry: any[]) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('slideRightShow');
      }
    });
  }


}

