import { Component, OnInit } from '@angular/core';
import { Dish} from '../shared/dish';
import { DishService } from '../services/dish.service';

  

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[];
  selectedDish:Dish;


  constructor(private dishServiceObj:DishService) { }

  ngOnInit() {
    this.dishes=this.dishServiceObj.getDishService();
  }

  onSelect(clickedDish:Dish)
  {
    this.selectedDish=clickedDish;
  
  }

}
