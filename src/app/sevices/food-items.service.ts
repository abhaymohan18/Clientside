import { Injectable } from '@angular/core';
import { FoodItems } from '../shared/model/foodItems';

@Injectable({
  providedIn: 'root'
})
export class FoodItemsService {
  getFoodItemForStoreId(storeId: String): FoodItems[] {
    let AllFoodItems:FoodItems[] = [
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
        id:1,
        name:"Coke",
        description:"Juicy Cheez burger with Lettuce, tomato and Onion",
        price:100,
        rating:4,
        imageUrl:"/assets/f4.jpg"
      },
      {
        id:1,
        name:"Pizza",
        description:"Juicy Cheez burger with Lettuce, tomato and Onion",
        price:100,
        rating:4,
        imageUrl:"/assets/f5.jpg"
      },
      {
        id:2,
        name:"Sandwhich",
        description:"Juicy Cheez burger with Lettuce, tomato and Onion",
        price:100,
        rating:4,
        imageUrl:"/assets/f6.jpg"
      },
      {
        id:2,
        name:"Pasta",
        description:"Juicy Cheez burger with Lettuce, tomato and Onion",
        price:100,
        rating:4,
        imageUrl:"/assets/f7.jpg"
      }

      
    ]

    let storeItems:FoodItems[] = []

    for(var val of AllFoodItems){
      if( String(val.id) == storeId){
        storeItems.push(val);
      }


    }

    return storeItems
    
  }

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
      },
      {
        id:6,
        name:"Sandwhich",
        description:"Juicy Cheez burger with Lettuce, tomato and Onion",
        price:100,
        rating:4,
        imageUrl:"/assets/f6.jpg"
      },
      {
        id:7,
        name:"Pasta",
        description:"Juicy Cheez burger with Lettuce, tomato and Onion",
        price:100,
        rating:4,
        imageUrl:"/assets/f7.jpg"
      }

      
    ]
  }
}
