import { Injectable } from '@angular/core';
import { FoodItems } from '../shared/model/foodItems';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodItemsService {

  //Webservice URL
  private webserviceUrl = "http://localhost:3000/menu/";
  constructor(private http: HttpClient ){}



  



  getFoodItemForStoreId(storeId: String, fi: FoodItems[]): FoodItems[] {
    console.log(fi);
    
    let AllFoodItems:FoodItems[]
    AllFoodItems = fi
    let storeItems:FoodItems[] = []

    for(var val of AllFoodItems){
      if( String(val.id) == storeId){
        storeItems.push(val);
      }
    }
    console.log("Store food Itesm"+fi);
    return storeItems
    
  }

  
  /*getAllFoodItems():FoodItems[]{
    return [

      {
        id:2,
        name:"Briyani",
        description:"Juicy Cheez burger with Lettuce",
        price:200,
        rating:3,
        imageUrl:"/assets/f2.jpg"
      },
      {
        id:3,
        name:"Fries",
        description:"Juicy Cheez burger with Lettuc",
        price:100,
        rating:4,
        imageUrl:"/assets/f3.jpg"
      },
      {
        id:4,
        name:"Coke",
        description:"Juicy Cheez burger with Lettuce",
        price:100,
        rating:4,
        imageUrl:"/assets/f4.jpg"
      },
      {
        id:5,
        name:"Pizza",
        description:"Juicy Cheez burger with Lettuce",
        price:100,
        rating:4,
        imageUrl:"/assets/f5.jpg"
      },
      {
        id:6,
        name:"Sandwhich",
        description:"Juicy Cheez burger with Lettuce",
        price:100,
        rating:4,
        imageUrl:"/assets/f6.jpg"
      },
      {
        id:7,
        name:"Pasta",
        description:"Juicy Cheez burger with Lettuce",
        price:100,
        rating:4,
        imageUrl:"https://carveyourcraving.com/wp-content/uploads/2020/07/pasta-using-fresh-tomato-sauce-without-peeling-the-skin.jpg"
      }

      
    ]
  }*/
}
