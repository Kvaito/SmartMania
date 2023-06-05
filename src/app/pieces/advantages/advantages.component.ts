import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss']
})
export class AdvantagesComponent implements OnInit {

  constructor() { }

  options = {
    threshold: [0.5] };
  observerLeft = new IntersectionObserver(this.onEntry, this.options);
  ngOnInit(): void {
    let elements = document.querySelectorAll('.advantage__item');
    // @ts-ignore
    for (let elm of elements) {
      this.observerLeft.observe(elm);
    }
  }

  onEntry(entry: any[]) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('slideUp');
      }
    });
  }
}
