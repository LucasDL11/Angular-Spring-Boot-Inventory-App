import { Component } from '@angular/core'; // Import Component decorator
import { Product } from '../product'; // Import Product interface
import { ProductService } from '../product.service'; // Import ProductService

@Component({
  selector: 'app-product-list', // Component selector
  templateUrl: './product-list.component.html' // Template URL
})
export class ProductListComponent {
  products: Product[]; // Array to store products

  constructor(private productService: ProductService){} // Constructor with ProductService injection

  /**
   * Lifecycle hook called after Angular has initialized all data-bound properties
   * and rendered the component's view.
   */
  ngOnInit(){
    this.getProducts(); // Call the getProducts method when component is initialized
  }

  /**
   * Retrieves products from the ProductService.
   */
  private getProducts(){
    this.productService.getProducts().subscribe( // Subscribe to the Observable returned by getProducts
      (data => {
        this.products = data; // Assign the retrieved products to the products array
      })
    );
  }
}
