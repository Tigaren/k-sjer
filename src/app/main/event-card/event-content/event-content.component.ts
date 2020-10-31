import { Meta } from './../../../models/image';
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
  meta: Meta[];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
      this.meta = items[0]._fl_meta_;
      console.log(this.meta);
    });

    window.scrollTo({
      top: 250,
      left: 0,
      behavior: 'smooth'
    });
  }

}
