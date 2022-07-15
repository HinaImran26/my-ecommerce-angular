import { Component, OnInit } from '@angular/core';
import { AllProductsService } from 'src/app/services/all-products.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  constructor(private _allproducts: AllProductsService) { }

  ngOnInit(): void {
  
  console.log(this._allproducts.get_all_products());
  
  
  
  }











}
