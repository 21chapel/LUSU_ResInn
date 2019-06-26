import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/event.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  selected_id;

  event;

  events = [];

  constructor(private route: ActivatedRoute, private eventService: EventService) { }

  ngOnInit() {
    this.events = this.eventService.getEvents();
    this.selected_id = this.route.snapshot.paramMap.get('id');
    this.event = this.events[this.selected_id - 1];
  }
}
