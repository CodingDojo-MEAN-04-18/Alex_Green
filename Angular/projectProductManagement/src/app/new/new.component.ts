import { Component, OnInit } from '@angular/core';
import { ProductManagementService } from '../product-management.service'
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  product = {
    title: '',
    price: '',
    imageUrl: '',
  }
  constructor(private productManagementService: ProductManagementService,
              private route: ActivatedRoute,
              private router: Router) { }

  onFormSubmit(){
    console.log("clicking", this.product)
    this.productManagementService.addProduct(this.product)
    this.product = {
      title: '',
      price: '',
      imageUrl: ''
    }
    this.router.navigate(['/products'])
  }

  ngOnInit() {
  }

}
