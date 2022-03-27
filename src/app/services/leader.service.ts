import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { delay } from 'rxjs';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root',
})
export class LeaderService {
  constructor(
    private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService
  ) {}

  getLeaders(): Observable<Leader[]> {
    return this.http
      .get<Leader[]>(baseURL + 'leaders')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getLeader(id: string): Observable<Leader> {
    return this.http
      .get<Leader>(baseURL + 'leaders/ + id')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
  getFeaturedLeader(): Observable<Leader> {
    return this.http
      .get<Leader[]>(baseURL + 'leaders?featured=true')
      .pipe(map((leaders) => leaders[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}

/*constructor() { }
  getLeaders(): Observable<Leader[]> {
    return of(LEADERS).pipe(delay(2000));
  }
  getLeader(id: string): Observable<Leader> {
    return of(LEADERS.filter((leader) => leader.id === id)[0]).pipe(delay(2000));
  }
  getFeaturedLeader(): Observable<Leader> {
    return of((LEADERS.filter((leader) => leader.featured)[0])).pipe(delay(2000));
  }*/
