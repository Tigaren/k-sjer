import { Meta } from './../models/image';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itmsCollection: AngularFirestoreCollection<Item>;
  items: Observable<any>;

  constructor(public afs: AngularFirestore) {
    this.items = this.afs.collection('fl_content').valueChanges();
   }

   // tslint:disable-next-line: typedef
   getItems(){
     return this.items;
   }
  }
