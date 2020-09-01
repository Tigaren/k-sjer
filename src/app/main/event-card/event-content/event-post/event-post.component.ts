import { Image } from '../../../../models/image';
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
  item: {overkrift: string, bildeUrl: string, innhold: string}

  constructor(private route: ActivatedRoute) {
    this.item = {
      overkrift: this.route.snapshot.params['over'],
      bildeUrl: this.route.snapshot.params['url'],
      innhold: this.route.snapshot.params['innh']
    }
  }

  ngOnInit(): void {
    window.scrollTo(0, 0)
  }


}
