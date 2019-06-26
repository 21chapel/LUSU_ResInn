import { Injectable } from '@angular/core';
import { Event } from './event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getEvents() {
    return [
      { id: 1, speaker: 'Dr. Sydney Stebenson',   name: 'Social Perceptions of the Universe', description: 'Award-winning student, Sydney Stevenson, displays her research poster from the 2016 student research display, an annual event during the University’s Research & Innovation Week. Research & Innovation Week 2017 offers a chance for the community to learn about the fascinating research taking place at Lakehead. Events take place from February 27 to March 8 at the University Avenue campus. All events are free and open to the public. '},
      { id: 2, speaker: 'Pr. Fiandi',  name: 'event 2', description: 'totally not rad'},
      { id: 3, speaker: 'Mr. Jose', name: 'event 3', description: 'totally lrad'},
    ];
  }

}
