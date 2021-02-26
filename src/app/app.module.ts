import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenubarModule} from 'primeng/menubar';
import {RightHalfComponent} from './right-half/right-half.component';
import {RouterModule} from '@angular/router';
import {CarouselModule} from 'primeng/carousel';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { NavbarComponent } from './navbar/navbar.component';
import {RippleModule} from 'primeng/ripple';

@NgModule({
  declarations: [
    AppComponent,
    RightHalfComponent,
    HomeComponent,
    SlideShowComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    RouterModule,
    CarouselModule,
    HttpClientModule,
    RippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
