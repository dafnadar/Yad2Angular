import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import ProductService from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  errorMessage: string = "";
  param: string="usd";

  constructor(private productService: ProductService) {
   }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.get().subscribe((data)=>{
      this.products = data as Product[];
    }, (error)=> this.errorMessage = <any>error)
  }

  deleteHandler(id: number) {
    this.productService.delete(id).subscribe(data=>{
      this.getProducts()
    })
  }

}
