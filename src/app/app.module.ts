import { BrowserModule } from '@angular/platform-browser';
import { Client } from "@petfinder/petfinder-js";
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { OwlCarouselDemoComponent } from './components/home/owl-carousel-demo/owl-carousel-demo.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DogsComponent } from './components/dogs/dogs.component';
import { CatsComponent } from './components/cats/cats.component';
import { VolunteerComponent } from './components/volunteer/volunteer.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    Client,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    OwlCarouselDemoComponent,
    DogsComponent,
    CatsComponent,
    VolunteerComponent,
    BlogComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
