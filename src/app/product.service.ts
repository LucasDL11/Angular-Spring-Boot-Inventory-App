import { HttpClient } from '@angular/common/http'; // Import HttpClient for making HTTP requests
import { Injectable } from '@angular/core'; // Import Injectable decorator
import { Observable } from 'rxjs'; // Import Observable from rxjs library
import { Product } from './product'; // Import Product interface

@Injectable({
  providedIn: 'root' // Declare that this service should be provided at the root level
})
export class ProductService {

  private baseUrl = "http://localhost:8080/inventory-app/products"; // Base URL for product API

  constructor(private httpClient: HttpClient) { } // Constructor with HttpClient injection

  /**
   * Fetches all products from the server.
   * @returns An Observable of type Product array
   */
  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl); // Make a GET request to retrieve products
  }

  /**
   * Adds a new product to the server.
   * @param product The product to add
   * @returns An Observable of type Object
   */
  addProduct(product: Product): Observable<Object> {
    return this.httpClient.post(this.baseUrl, product); // Make a POST request to add a product
  }

  /**
   * Retrieves a product by its ID from the server.
   * @param id The ID of the product to retrieve
   * @returns An Observable of type Product
   */
  getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.baseUrl}/${id}`); // Make a GET request to retrieve a product by ID
  }

  /**
   * Updates a product on the server.
   * @param id The ID of the product to update
   * @param product The updated product information
   * @returns An Observable of type Object
   */
  editProduct(id: number, product: Product): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, product); // Make a PUT request to update a product
  }

  /**
   * Deletes a product from the server.
   * @param id The ID of the product to delete
   * @returns An Observable of type Object
   */
  deleteProduct(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`); // Make a DELETE request to delete a product
  }
}
