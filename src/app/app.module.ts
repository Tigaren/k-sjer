import { EventPostComponent } from './main/event-card/event-content/event-post/event-post.component';
import { ItemService } from './services/item.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { FooterComponent } from './footer/footer/footer.component';
import { NewsCardComponent } from './main/news-card/news-card.component';
import { EventCardComponent } from './main/event-card/event-card.component';
import { JumbotronComponent } from './main/jumbotron/jumbotron.component';
import { TurerComponent } from './main/turer/turer.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { ItemComponent } from './item/item.component';
import { EventContentComponent } from './main/event-card/event-content/event-content.component';
import { MainComponent } from './main/main/main.component';

const appRouter: Routes = [
  {path: '', component: MainComponent},
      {path: 'app-event-content', component: EventContentComponent},
      {path: ':over/:url/:innh', component: EventPostComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NewsCardComponent,
    EventCardComponent,
    JumbotronComponent,
    TurerComponent,
    ItemComponent,
    EventContentComponent,
    MainComponent,
    EventPostComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase, 'k-sjer'),
    RouterModule.forRoot(appRouter),
  ],
  providers: [
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
