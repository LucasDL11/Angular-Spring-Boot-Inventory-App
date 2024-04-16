import { Component } from '@angular/core'; // Import Component decorator
import { Product } from '../product'; // Import Product interface
import { ProductService } from '../product.service'; // Import ProductService
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-add-product', // Component selector
  templateUrl: './add-product.component.html', // Template URL
  styleUrls: ['./add-product.component.css'] // Stylesheet URLs
})
export class AddProductComponent {
  product: Product = new Product(); // Initialize a new Product object

  constructor(private productService: ProductService, // Constructor with ProductService injection
    private router: Router){} // Constructor with Router injection

  /**
   * Triggered when the form is submitted.
   */
  onSubmit() {
    this.saveProduct(); // Call the saveProduct method
  }

  /**
   * Saves the product to the server.
   */
  saveProduct(){
    this.productService.addProduct(this.product).subscribe(
      {
        next: (data) => {
          this.goListProducts(); // Navigate to the product list upon successful addition
        },
        error:(error: any) => {
          console.log(error); // Log any errors to the console
        }
      }
    );
  }

  /**
   * Navigates to the product list page.
   */
  goListProducts(){
    this.router.navigate(['/products']); // Navigate to the '/products' route
  }
}
