import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import ProductService from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product = new Product();
  param: string="usd";

  constructor(private route:ActivatedRoute, private productService: ProductService) {
    route.params.subscribe((param)=>{
      let id = param["id"];
      productService.getById(id).subscribe(data=>{
        this.product = data as Product
      })
    })

   }

  ngOnInit(): void {
  }

  deleteHandler(id: number) {
    this.productService.delete(id).subscribe()
  }

}
