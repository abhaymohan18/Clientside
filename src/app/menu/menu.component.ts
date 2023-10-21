import { Component } from '@angular/core';
import { FoodItemsService } from '../sevices/food-items.service';
import { FoodItems } from '../shared/model/foodItems';
import { FormsModule } from '@angular/forms';
import { IgcRatingComponent, defineComponents } from 'igniteui-webcomponents';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {

  public fooditemsforstore:FoodItems[] = [];
  public fooditemfromServer!: Observable<FoodItems[]>;
  public storeId!: String;
  public Allfooditems!: FoodItems[];
  

  items:any=[];  
  
  //Webservice URL
  private webserviceUrl = "http://localhost:3000/menu/";

  constructor(private fi:FoodItemsService, private route:ActivatedRoute, private http: HttpClient ){

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };


    //Here we get all the food items
    //this.Allfooditems = this.fi.getAllFoodItems();
 
    
    
    //Here we get the all the food items from webservice
    this.http.get(this.webserviceUrl).pipe(map((data:any)=>data.data))
    .subscribe(data=>{
      this.items = data;
      console.log(this.items);
    })
    console.log("food item from service"+this.items[0]);

  }

  


  data = {};
  ngOnInit():void{

    // Here we extract the store id from url
    this.storeId = this.route.snapshot.params['storeid'];


  }



  }
