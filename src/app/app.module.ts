import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenubarModule} from 'primeng/menubar';
import {RightHalfComponent} from './right-half/right-half.component';
import {RouterModule} from '@angular/router';
import {CarouselModule} from 'primeng/carousel';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home/home.component';
import {SlideShowComponent} from './slide-show/slide-show.component';
import {NavbarComponent} from './navbar/navbar.component';
import {RippleModule} from 'primeng/ripple';
import {ContentBaseComponent} from './content-base/content-base.component';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {TortenelemComponent} from './contents/tortenelem/tortenelem.component';
import {AnimationTestComponent} from './animation-test/animation-test.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ScrollTopModule} from 'primeng/scrolltop';

@NgModule({
  declarations: [
    AppComponent,
    RightHalfComponent,
    HomeComponent,
    SlideShowComponent,
    NavbarComponent,
    ContentBaseComponent,
    TortenelemComponent,
    AnimationTestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    RouterModule,
    CarouselModule,
    HttpClientModule,
    RippleModule,
    ScrollPanelModule,
    BrowserAnimationsModule,
    ScrollTopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
