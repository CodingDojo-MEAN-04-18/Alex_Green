import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductManagementService } from '../product-management.service'



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product = {
    title: '',
    price: '',
    imageUrl: '',
  }
  thisProduct
  constructor(private route: ActivatedRoute,
              private productManagementService: ProductManagementService,
              private router: Router) { 
    this.route.paramMap.subscribe( params => {
      console.log(params.get('itemNum'), "test");
      this.thisProduct = params.get('itemNum')
    })
  }

  ngOnInit() {
    this.product = this.productManagementService.getOne(this.thisProduct)
    console.log(this.product)
  }

  onProductEdit(){
    console.log("editing")
    this.router.navigate(['/products'])
    }
  }


