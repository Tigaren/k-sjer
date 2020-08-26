import { Image } from './../models/image';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itmsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  image: Observable<Image[]>;

  constructor(public afs: AngularFirestore) {
    this.items = this.afs.collection('fl_content').valueChanges();
    this.image = this.afs.collection('fl_files').valueChanges();
   }

   // tslint:disable-next-line: typedef
   getItems(){
     return this.items;
   }
   // tslint:disable-next-line: typedef
   getImage(){
     return this.image;
   }
}


