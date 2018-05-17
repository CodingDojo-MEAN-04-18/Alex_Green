import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductManagementService {

  allProducts = []

  constructor() { }

  addProduct(newProduct){
    this.allProducts.push(newProduct);
    for(let i = 0; i < this.allProducts.length; i++){
      this.allProducts[i].itemNum = i+1
    } 
    console.log(this.allProducts)
  }

  editProduct(){}
  
  deleteProduct(product):void {
    const idx = this.allProducts.indexOf(product);
    this.allProducts.splice(idx, 1);
  }

  retrieveProducts(){
    return this.allProducts
  }

  getOne(itemNum){
    for(let i = 0; i < this.allProducts.length; i++){
      if(itemNum == this.allProducts[i].itemNum){
        return this.allProducts[i]
      }
    }
  }
}
