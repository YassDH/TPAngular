import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { CvComponent } from './cvtech/cv/cv.component';
import { CvdetailComponent } from './cvtech/cvdetail/cvdetail.component';
import { CvlistComponent } from './cvtech/cvlist/cvlist.component';
import { CvitemComponent } from './cvtech/cvitem/cvitem.component';
import { MystyleComponent } from './directive/mystyle/mystyle.component';
import { RainbowDirective } from './directive/rainbow.directive';
import { DefaultthumbnailPipe } from './cvtech/defaultthumbnail.pipe';
import { EmbaucheComponent } from './cvtech/embauche/embauche.component';
import {ROUTING} from "./app.routing";
import { NavbarComponent } from './navbar/navbar.component';
import { DetailComponent } from './cvtech/detail/detail.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddComponent } from './cvtech/add/add.component';
import { LoginComponent } from './login/login.component';
import { SliderComponent } from './slider/slider.component';
import { HttpComponent } from './http/http.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    CvdetailComponent,
    CvlistComponent,
    CvitemComponent,
    MystyleComponent,
    RainbowDirective,
    DefaultthumbnailPipe,
    EmbaucheComponent,
    NavbarComponent,
    DetailComponent,
    NotfoundComponent,
    AddComponent,
    LoginComponent,
    SliderComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ROUTING,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
