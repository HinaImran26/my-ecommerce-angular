import { style } from '@angular/animations';
import { SelectorMatcher } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  search(){
// document.getElementById('search-bar').style.visibility="visible";
var ele= document.getElementById('search-bar');
if(ele!=null)
{ele.style.visibility="visible";}

  }





} 
// class end

