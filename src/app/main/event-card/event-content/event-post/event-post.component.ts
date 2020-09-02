import { Item } from '../../../../models/item';
import { ItemService } from '../../../../services/item.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-event-post',
  templateUrl: './event-post.component.html',
  styleUrls: ['./event-post.component.css']
})
export class EventPostComponent implements OnInit {
  item: {id: string/* overkrift: string, bildeUrl: string, innhold: string */};
  items: Item[];
  overskrift: string;
  url: string;
  innhold: string;
  constructor(private route: ActivatedRoute, private itemService: ItemService) {
    this.item = {
      /* overkrift: this.route.snapshot.params['over'],
      bildeUrl: this.route.snapshot.params['url'],
      innhold: this.route.snapshot.params['innh'], */
      id: this.route.snapshot.params.id
    };
    this.itemService.getItems().subscribe(items => {
      this.items = items;
    });
    this.itemService.getItems().subscribe(items => {
      for (const iitem of this.items){
        if (this.item.id === iitem.id){
          this.overskrift = iitem.overskrift;
          this.url = iitem.urlBilde;
          this.innhold = iitem.hovedInnhold;
        }
      }
    });
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
