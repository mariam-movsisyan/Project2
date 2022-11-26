import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { BannerBlockComponent } from './components/banner_block/banner-block.component';
import { BestsellersComponent } from './components/bestsellers/bestsellers.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { SaleComponent } from './components/sale/sale.component';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CatalogComponent,
    SliderComponent,
    SaleComponent,
    ProductsComponent,
    BestsellersComponent,
    BannerComponent,
    BannerBlockComponent,
    BrandsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
