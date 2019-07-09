import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Event } from '../shared/interfaces';

@Injectable()
export class EventService {

    baseUrl: string = 'assets/';
    
    constructor(private http: HttpClient) { }

    getEvents() : Observable<Event[]> {
        return this.http.get<Event[]>(this.baseUrl + 'events.json')
            .pipe(
                catchError(this.handleError)
            );
    }
    
    getEvent(id: number) : Observable<Event> {
      return this.http.get<Event[]>(this.baseUrl + 'events.json')
        .pipe(
          map(customers => {
            let customer = customers.filter((cust: Event) => cust.id === id);
            return (customer && customer.length) ? customer[0] : null;
          }),
          catchError(this.handleError)
        )
    }


    _getEvents() {
        return [
          { id: 1, speaker: 'Dr. Sydney Stebenson',   name: 'Social Perceptions of the Universe', description: 'Award-winning student, Sydney Stevenson, displays her research poster from the 2016 student research display, an annual event during the University’s Research & Innovation Week. Research & Innovation Week 2017 offers a chance for the community to learn about the fascinating research taking place at Lakehead. Events take place from February 27 to March 8 at the University Avenue campus. All events are free and open to the public. '},
          { id: 2, speaker: 'Pr. Fiandi',  name: 'event 2', description: 'totally not rad'},
          { id: 3, speaker: 'Mr. Jose', name: 'event 3', description: 'totally lrad'},
        ];
      }


    private handleError(error: any) {
      console.error('server error:', error);
      if (error.error instanceof Error) {
          const errMessage = error.error.message;
          return Observable.throw(errMessage);
          // Use the following instead if using lite-server
          // return Observable.throw(err.text() || 'backend server error');
      }
      return Observable.throw(error || 'Node.js server error');
    }

}