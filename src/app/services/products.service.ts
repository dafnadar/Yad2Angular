import { HttpClient } from "@angular/common/http";  
import { Injectable } from "@angular/core";
import { Product } from "../models/product.model";

const DBURL = "http://localhost:4100/products/";

@Injectable()
class ProductService {
    constructor(private httpClient:HttpClient){

    }

    get(){
        return this.httpClient.get(DBURL)
    }

    getById(id:number){
        return this.httpClient.get(DBURL+id);
    }

    post(product: Product){
        return this.httpClient.post(DBURL, product);
    }

    // put(product: Product) {
    //     return this.httpClient.put(DBURL+product.id, product);
    // }

    delete(id:number){
        return this.httpClient.delete(DBURL + id);
    }

}

export default ProductService;