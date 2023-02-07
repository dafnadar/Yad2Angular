import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import ProductService from 'src/app/services/products.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {

  newProduct: Product = new Product();
  phonePattern="^0(5[^7]|[2-4]|[8-9]|7[0-9])[0-9]{7}$";
  pricePattern="[0-9]+";

  constructor(private productService: ProductService, private router: Router) {
    
   }

  ngOnInit(): void {
  }

  addNewProduct() {
    this.newProduct.date = new Date();
    this.productService.post(this.newProduct).subscribe(data=>{
      this.router.navigateByUrl("/")
    })

  }
 }
