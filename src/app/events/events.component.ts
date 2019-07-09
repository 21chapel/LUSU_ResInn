import { Component, OnInit } from '@angular/core';

import { EventService } from '../core/event.service';
import { Event } from '../shared/interfaces';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html'
})
export class EventsComponent implements OnInit {
    title: string;
    event: any[];
    
    constructor(private eventService: EventService) {}
    
    ngOnInit() {
        this.title = 'Welcome';
        this.eventService.getEvents()
        .subscribe((events: Event[]) => this.event = events);
    }
}