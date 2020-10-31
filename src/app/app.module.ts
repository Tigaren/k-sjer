import { ContactFormComponent } from './footer/contactForm/contactForm.component';
import { WeatherWidgetMainComponent } from './weather-widget-main/weather-widget-main.component';
import { NewsContentComponent } from './main/news-card/news-content/news-content.component';
import { NewsPostComponent } from './main/news-card/news-content/news-post/news-post.component';
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
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './main/sidebar/sidebar.component';
import { CookieService } from 'ngx-cookie-service';
import { BackToTopBtnComponent } from './back-to-top-btn/back-to-top-btn.component';

const appRouter: Routes = [
  {path: '', component: MainComponent},
  {path: 'contactForm', component: ContactFormComponent},
  {path: 'nyheter', component: NewsContentComponent},
  {path: 'event', component: EventContentComponent},
  {path: ':id', component: EventPostComponent},
  {path: ':id', component: NewsPostComponent}
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
    EventPostComponent,
    SidebarComponent,
    NewsPostComponent,
    NewsContentComponent,
    WeatherWidgetMainComponent,
    ContactFormComponent,
    BackToTopBtnComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase, 'k-sjer'),
    RouterModule.forRoot(appRouter),
  ],
  providers: [
    ItemService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
