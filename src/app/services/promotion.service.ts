import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTION } from '../shared/promotions';
@Injectable({
  providedIn: 'root',
})
export class PromotionService {
  constructor() {}
  getPromotion(): Promise<Promotion[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(PROMOTION), 2000);
    });
  }
  getPromotions(id: string): Promise<Promotion> {
    return new Promise((resolve) => {
      // Simulate server latency with 2 second delay
      setTimeout(
        () => resolve(PROMOTION.filter((promo) => promo.id === id)[0]),
        2000
      );
    });
  }
  getfeaturedPromotion(): Promise<Promotion> {
    return new Promise((resolve) => {
      // Simulate server latency with 2 second delay
      setTimeout(
        () => resolve(PROMOTION.filter((promo) => promo.featured)[0]),
        2000
      );
    });
  }
}
