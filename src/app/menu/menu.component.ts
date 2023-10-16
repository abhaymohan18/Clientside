import { Component } from '@angular/core';
import { FoodItemsService } from '../sevices/food-items.service';
import { FoodItems } from '../shared/model/foodItems';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  public  fooditems:FoodItems[] = [];
  constructor(private fi:FoodItemsService){}

  ngOnInit():void{
    this.fooditems = this.fi.getAllFoodItems();
  }
  
}
