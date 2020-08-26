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

  constructor() { }

  ngOnInit(): void {
  }

}
