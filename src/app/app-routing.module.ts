import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {PriceComponent} from "./pages/price/price.component";
import {GuaranteeComponent} from "./pages/guarantee/guarantee.component";
import {AboutComponent} from "./pages/about/about.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {CrushComponent} from "./pages/crush/crush.component";
import {ProductComponent} from "./pages/product/product.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'price',component:PriceComponent},
  {path:'guarantee',component:GuaranteeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'product',component:ProductComponent},
  {path:'crush-test',component:CrushComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
