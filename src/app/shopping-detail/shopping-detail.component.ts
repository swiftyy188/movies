import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingListService } from './../shoppinglist.service';

@Component({
  selector: 'app-shopping-detail',
  templateUrl: './shopping-detail.component.html',
  styleUrls: ['./shopping-detail.component.css']
})
export class ShoppingDetailComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute, private list: ShoppingListService) { }
  shoppingList = []
  ngOnInit() {
  	this.shoppingList = this.list.shoppingList
  }
}
