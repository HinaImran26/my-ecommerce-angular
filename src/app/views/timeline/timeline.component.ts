import { Component, OnInit } from '@angular/core';
import { AllProductsService } from 'src/app/services/all-products.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

products:any;

  constructor(private _allproducts: AllProductsService) { }

  ngOnInit(): void {
  
    this.products=this._allproducts.get_all_products()
  console.log("data in timeline via service", this.products);
  
  
  
  }











}
