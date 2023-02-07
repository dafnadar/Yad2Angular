import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AddNewComponent } from './components/add-new/add-new.component';
import ProductService from './services/products.service';
import { FormsModule } from '@angular/forms';
import { ExchangePipe } from './pipes/exchange.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProductsComponent,
    ProductDetailsComponent,
    AddNewComponent,
    ExchangePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    // AppRoutingModule,
    routing
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
