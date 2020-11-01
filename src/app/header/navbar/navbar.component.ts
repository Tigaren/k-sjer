import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // tslint:disable-next-line: typedef
  toggle() {
    const list = document.querySelector('#navbarToggleExternalContent');
    list.classList.toggle('show');

  }

  // tslint:disable-next-line: typedef
  toTop() {
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
