import { Component, OnInit } from '@angular/core';
import { ProductManagementService } from '../product-management.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  allProducts = []
  constructor(private productManagementService: ProductManagementService) { }

  onDeleteProduct(product){
    console.log("deleting this one", product)
    this.productManagementService.deleteProduct(product);
  }

  ngOnInit() {
    this.allProducts = this.productManagementService.retrieveProducts()
  }

}
