import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turer',
  templateUrl: './turer.component.html',
  styleUrls: ['./turer.component.css']
})
export class TurerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo({
      top: 250,
      left: 0,
      behavior: 'smooth'
    });
  }

}
