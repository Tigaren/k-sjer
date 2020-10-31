import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-contactForm',
  templateUrl: './contactForm.component.html',
  styleUrls: ['./contactForm.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    window.scrollTo({
      top: 250,
      left: 0,
      behavior: 'smooth'
    });
  }

}
