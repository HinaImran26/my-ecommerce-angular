import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AllProductsService } from 'src/app/services/all-products.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {
products:any; electronics:any;
count:number=0;

  constructor(private all_products : AllProductsService) { }

  ngOnInit(): void {
  
  this.products=this.all_products.get_all_products();
  console.log("products in elec via service", this.products)
  // console.log("first prod", this.products.id);  


this.electronics = this.products.filter( (item:any) => {
  return item.category.name === "Electronics";
});

console.log("elec items filtered:", this.electronics)
this.count=this.electronics.length;
  }


}
