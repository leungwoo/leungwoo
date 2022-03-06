import { Component, OnInit } from '@angular/core';
import { PromotionService } from '../services/promotion.service';
import { DishService } from '../services/dish.service';
import { Dish } from '../shared/dish';
import { Promotion } from '../shared/promotion';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dish: Dish;
  promotion: Promotion;
  constructor(
    private dishservice: DishService,
    private promotionservice: PromotionService
  ) {
    this.dish = this.dishservice.getfeaturedDish();
    this.promotion = this.promotionservice.getfeaturedPromotions();
  }

  ngOnInit(): void {}
}
