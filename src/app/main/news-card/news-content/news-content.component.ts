import { Item } from './../../../models/item';
import { ItemService } from '../../../services/item.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.css']
})
export class NewsContentComponent implements OnInit {
  items: Item[];
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
    });

    window.scrollTo({
      top: 250,
      left: 0,
      behavior: 'smooth'
    });

  }

}
