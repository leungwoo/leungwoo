import { Component, OnInit } from '@angular/core';
import { PromotionService } from '../services/promotion.service';
import { DishService } from '../services/dish.service';
import { Dish } from '../shared/dish';
import { Promotion } from '../shared/promotion';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dish?: Dish;
  promotion?: Promotion;
  leader?: Leader;
  constructor(
    private dishservice: DishService,
    private promotionservice: PromotionService,
    private leaderservice: LeaderService
  ) {
    this.dishservice.getfeaturedDish().then((dishes) => (this.dish = dishes));

    this.promotionservice
      .getfeaturedPromotion()
      .then((promotion) => (this.promotion = promotion));
    this.leaderservice
      .getfeaturedLeader()
      .then((leader) => (this.leader = leader));
  }

  ngOnInit(): void {}
}
