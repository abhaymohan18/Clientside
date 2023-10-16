import { Injectable } from '@angular/core';
import { FoodItems } from '../shared/model/foodItems';

@Injectable({
  providedIn: 'root'
})
export class FoodItemsService {

  constructor() { }
  
  getAllFoodItems():FoodItems[]{
    return [
      {
        id:1,
        name:"Burger",
        description:"Juicy Cheez burger with Lettuce, tomato and Onion",
        price:100,
        rating:4,
        imageUrl:"/assets/f1.jpg"
      },
      {
        id:2,
        name:"Briyani",
        description:"Juicy Cheez burger with Lettuce, tomato and Onion",
        price:200,
        rating:3,
        imageUrl:"/assets/f2.jpg"
      },
      {
        id:3,
        name:"Fries",
        description:"Juicy Cheez burger with Lettuce, tomato and Onion",
        price:100,
        rating:4,
        imageUrl:"/assets/f3.jpg"
      },
      {
        id:4,
        name:"Coke",
        description:"Juicy Cheez burger with Lettuce, tomato and Onion",
        price:100,
        rating:4,
        imageUrl:"/assets/f4.jpg"
      },
      {
        id:5,
        name:"Pizza",
        description:"Juicy Cheez burger with Lettuce, tomato and Onion",
        price:100,
        rating:4,
        imageUrl:"/assets/f5.jpg"
      }

      
    ]
  }
}
