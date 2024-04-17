import { Component } from '@angular/core';
import { Product } from '../product'; // Import Product interface
import { ProductService } from '../product.service'; // Import ProductService for interacting with product data
import { ActivatedRoute, Router } from '@angular/router'; // Import ActivatedRoute and Router for routing functionality

@Component({
  selector: 'app-edit-product', // Component selector
  templateUrl: './edit-product.component.html' // Template URL for component's HTML
})
export class EditProductComponent {
  product: Product = new Product(); // Initialize product object
  id: number; // Initialize id variable to hold product ID

  constructor(
    private productService: ProductService, // Inject ProductService for fetching and updating product data
    private route: ActivatedRoute, // Inject ActivatedRoute for accessing route parameters
    private router: Router // Inject Router for navigation
  ) {}

  ngOnInit() {
    // Retrieve product ID from route parameters
    this.id = this.route.snapshot.params['id'];
    // Fetch product data by ID from ProductService
    this.productService.getProductById(this.id).subscribe(
      {
        next: (data) => this.product = data, // Assign fetched product data to product object
        error: (errors: any) => console.log(errors) // Log any errors encountered during data retrieval
      }
    );
  }

  onSubmit() {
    // Call saveProduct method when form is submitted
    this.saveProduct();
  }

  saveProduct() {
    // Call editProduct method of ProductService to update product data
    this.productService.editProduct(this.id, this.product).subscribe(
      {
        next: (data) => this.goProductList(), // Navigate to product list page upon successful product update
        error: (errors) => console.log(errors) // Log any errors encountered during product update
      }
    );
  }

  goProductList(): void {
    // Navigate to product list page
    this.router.navigate(['/products']);
  }
}
