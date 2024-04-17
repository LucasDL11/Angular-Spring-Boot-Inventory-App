import { Component } from '@angular/core'; // Import Component decorator
import { Product } from '../product'; // Import Product interface
import { ProductService } from '../product.service'; // Import ProductService
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-product-list', // Component selector
  templateUrl: './product-list.component.html' // Template URL
})
export class ProductListComponent {
  products: Product[]; // Array to store products

  constructor(
    private productService: ProductService, // Inject ProductService for fetching product data
    private router: Router // Inject Router for navigation
  ) {} // Constructor with ProductService and Router injection

  /**
   * Lifecycle hook called after Angular has initialized all data-bound properties
   * and rendered the component's view.
   */
  ngOnInit() {
    this.getProducts(); // Call the getProducts method when component is initialized
  }

  /**
   * Retrieves products from the ProductService.
   */
  private getProducts() {
    this.productService.getProducts().subscribe( // Subscribe to the Observable returned by getProducts
      (data => {
        this.products = data; // Assign the retrieved products to the products array
      })
    );
  }

  /**
   * Navigates to the edit product page.
   * @param id The ID of the product to edit
   */
  editProduct(id: number) {
    this.router.navigate(['edit-product', id]); // Navigate to the edit product page with the specified ID
  }

  /**
   * Deletes a product.
   * @param id The ID of the product to delete
   */
  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe( // Subscribe to the Observable returned by deleteProduct
      {
        next: (data) => this.getProducts(), // Refresh the product list upon successful deletion
        error: (errors) => console.log(errors) // Log any errors encountered during product deletion
      }
    );
  }
}
