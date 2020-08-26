import { ItemService } from './../services/item.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    /* this.itemService.getItems().subscribe(items => {
      console.log(items);
    });
    this.itemService.getImage().subscribe(image => {
      console.log(image);
    }); */
  }

}
