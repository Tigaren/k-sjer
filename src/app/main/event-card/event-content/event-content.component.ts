import { Image } from './../../../models/image';
import { Item } from './../../../models/item';
import { ItemService } from './../../../services/item.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-content',
  templateUrl: './event-content.component.html',
  styleUrls: ['./event-content.component.css']
})
export class EventContentComponent implements OnInit {
  items: Item[];
  image: Image[];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
    });
    this.itemService.getImage().subscribe(image => {
      this.image = image;
      console.log(this.image[0]);
    });
  }

}
