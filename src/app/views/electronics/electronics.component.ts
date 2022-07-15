import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AllProductsService } from 'src/app/services/all-products.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {
products:any;
  constructor(private all_products : AllProductsService) { }

  ngOnInit(): void {
  
  this.products=this.all_products.get_all_products();
  console.log("products via service", this.products)
  
  
  
  
  }


}
