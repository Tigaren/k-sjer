import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-to-top-btn',
  templateUrl: './back-to-top-btn.component.html',
  styleUrls: ['./back-to-top-btn.component.css']
})
export class BackToTopBtnComponent implements OnInit {

  // tslint:disable-next-line: typedef
  pageUp() {
    window.scrollTo({
      top: 250,
      left: 0,
      behavior: 'smooth'
    });
  }
  constructor() { }

  ngOnInit(): void {
  }


}
