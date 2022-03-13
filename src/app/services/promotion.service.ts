import { Injectable } from '@angular/core';
import { delay } from 'rxjs';
import { from } from 'rxjs';
import { Observable, of } from 'rxjs';
import { Promotion } from '../shared/promotion';
import { PROMOTION } from '../shared/promotions';
@Injectable({
  providedIn: 'root',
})
export class PromotionService {
  constructor() {}
  getPromotion(): Observable<Promotion[]> {
    return of(PROMOTION).pipe(delay(2000));
  }
  getPromotions(id: string): Observable<Promotion> {
    return of(PROMOTION.filter((promo) => promo.id === id)[0]).pipe(
      delay(2000)
    );
  }
  getFeaturedPromotion(): Observable<Promotion> {
    return of(PROMOTION.filter((promo) => promo.featured)[0]).pipe(delay(2000));
  }
}
