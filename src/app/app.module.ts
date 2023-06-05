import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './pages/menu/menu.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { PriceComponent } from './pages/price/price.component';
import { GuaranteeComponent } from './pages/guarantee/guarantee.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CrushComponent } from './pages/crush/crush.component';
import { ProductComponent } from './pages/product/product.component';
import { FormEnrollComponent } from './pieces/form-enroll/form-enroll.component';
import {FormsModule} from "@angular/forms";
import { PointComponent } from './pieces/point/point.component';
import { FeedbackComponent } from './pieces/feedback/feedback.component';
import { BannerComponent } from './pieces/banner/banner.component';
import { VariationsComponent } from './pieces/variations/variations.component';
import { MapComponent } from './pieces/map/map.component';
import { AdvantagesComponent } from './pieces/advantages/advantages.component';
import { CategoryComponent } from './pieces/category/category.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    PriceComponent,
    GuaranteeComponent,
    AboutComponent,
    ContactComponent,
    CrushComponent,
    ProductComponent,
    FormEnrollComponent,
    PointComponent,
    FeedbackComponent,
    BannerComponent,
    VariationsComponent,
    MapComponent,
    AdvantagesComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
