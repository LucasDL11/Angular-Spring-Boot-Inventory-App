import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule for making HTTP requests
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Import AppRoutingModule for routing
import { AppComponent } from './app.component'; // Import AppComponent
import { ProductListComponent } from './product-list/product-list.component'; // Import ProductListComponent
import { AddProductComponent } from './add-product/add-product.component'; // Import AddProductComponent
import { FormsModule } from '@angular/forms';
import { EditProductComponent } from './edit-product/edit-product.component'; // Import FormsModule for two-way data binding

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AddProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule, // Import BrowserModule for basic browser functionality
    HttpClientModule, // Import HttpClientModule for making HTTP requests
    AppRoutingModule, // Import AppRoutingModule for routing
    FormsModule // Import FormsModule for two-way data binding
  ],
  providers: [], // No providers specified for this module
  bootstrap: [AppComponent] // AppComponent is the root component
})
export class AppModule { }
