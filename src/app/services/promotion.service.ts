import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTION } from '../shared/promotions';
@Injectable({
  providedIn: 'root',
})
export class PromotionService {
  constructor() {}
  getPromotion(): Promotion[] {
    return PROMOTION;
  }
  getPromotions(id: string): Promotion {
    return PROMOTION.filter((promo) => promo.id === id)[0];
  }
  getfeaturedPromotion(): Promotion {
    return PROMOTION.filter((promo) => promo.featured)[0];
  }
}
