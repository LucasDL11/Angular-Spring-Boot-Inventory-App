import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

// Define routes for navigating between components
const routes: Routes = [
  { path: 'products', component: ProductListComponent }, // Route to the product list component
  { path: '', redirectTo: 'products', pathMatch: 'full' }, // Default route redirects to product list
  { path: 'add-product', component: AddProductComponent }, // Route to add product component
  { path: 'edit-product/:id', component: EditProductComponent } // Route to edit product component with parameter
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configure the router with the defined routes
  exports: [RouterModule] // Export the configured router module to make it available to other modules
})
export class AppRoutingModule { } // Angular module for routing configuration
