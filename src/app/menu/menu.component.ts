import { Component } from '@angular/core';
import { FoodItemsService } from '../sevices/food-items.service';
import { FoodItems } from '../shared/model/foodItems';
import { FormsModule } from '@angular/forms';
import { IgcRatingComponent, defineComponents } from 'igniteui-webcomponents';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {

  public fooditemsforstore:FoodItems[] = [];
  public storeId!: String;
  public Allfooditems!: FoodItems[];
  constructor(private fi:FoodItemsService, private route:ActivatedRoute){}


  ngOnInit():void{

    // Here we extract the store id from url
    this.storeId = this.route.snapshot.params['storeid'];

    //Here we get all the food items
    this.Allfooditems = this.fi.getAllFoodItems();

    //Here we get the food items for specific store
    this.fooditemsforstore = this.fi.getFoodItemForStoreId(this.storeId)

    console.log("hello"+this.storeId);
    this.route.params.subscribe((data)=>{
      this.storeId = data['storeid']
    })
  }
  
  
}
