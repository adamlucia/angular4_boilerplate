import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class OfferService {
    constructor(private http: HttpClient) { }

    private offerUrl = 'api/offer';

    getOffer (id: number): Observable<Offer[]> {
      const url = `${this.offerUrl}/${id}`;
      return this.http.get<Offer>(url).map(res => {
        return res.json().results.map(item => {
          return new Offer(
              item.trackName,
              item.artistName,
              item.trackViewUrl,
              item.artworkUrl30,
              item.artistId
          );
        })
        .pipe(
        tap(_ => this.log(`fetched Offer id=${id}`)),
        catchError(this.handleError<Offer>(`getOffer id=${id}`))
      );
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

}
