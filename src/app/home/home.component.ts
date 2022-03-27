import { Component, Inject, OnInit } from '@angular/core';
import { PromotionService } from '../services/promotion.service';
import { DishService } from '../services/dish.service';
import { Dish } from '../shared/dish';
import { Promotion } from '../shared/promotion';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { expand, flyInOut } from '../animations/app.animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    style: 'display:block;',
  },
  animations: [flyInOut(), expand()],
})
export class HomeComponent implements OnInit {
  dish?: Dish;
  dishErrMess?: string;
  promotion?: Promotion;
  leader?: Leader;
  constructor(
    private dishservice: DishService,
    private promotionservice: PromotionService,
    private leaderservice: LeaderService,
    @Inject('BaseURL') public BaseURL: string
  ) {
    this.dishservice.getFeaturedDish().subscribe(
      (dishes) => (this.dish = dishes),
      (errmess) => (this.dishErrMess = <any>errmess)
    );

    this.promotionservice.getFeaturedPromotion().subscribe(
      (promotion) => (this.promotion = promotion),
      (errmess) => (this.dishErrMess = <any>errmess)
    );
    this.leaderservice.getFeaturedLeader().subscribe(
      (leader) => (this.leader = leader),
      (errmess) => (this.dishErrMess = <any>errmess)
    );
  }

  ngOnInit(): void {}
}
