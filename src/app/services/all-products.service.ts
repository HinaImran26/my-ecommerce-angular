import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllProductsService {

all_products:any;

  constructor(private http: HttpClient) { 

    this.http.get('assets/json/products.json').subscribe((res:any) => {
      this.all_products = res;
      // console.log('products via json ',  this.all_products);
    });


  }


  get_all_products(){
    return this.all_products;
  }






}



