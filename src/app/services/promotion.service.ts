import { Injectable } from '@angular/core';
import { catchError, delay, map } from 'rxjs';
import { from } from 'rxjs';
import { Observable, of } from 'rxjs';
import { Promotion } from '../shared/promotion';
import { PROMOTION } from '../shared/promotions';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
@Injectable({
  providedIn: 'root',
})
export class PromotionService {
  constructor(
    private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService
  ) {}

  getPromotion(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(baseURL + 'promotions');
  }
  getPromotions(id: string): Observable<Promotion> {
    return of(PROMOTION.filter((promo) => promo.id === id)[0]).pipe(
      delay(2000)
    );
  }
  getFeaturedPromotion(): Observable<Promotion> {
    return this.http
      .get<Promotion[]>(baseURL + 'promotions?featured=true')
      .pipe(map((promotion) => promotion[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
