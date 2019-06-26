import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-tb',
  templateUrl: './tb.component.html',
  styleUrls: ['./tb.component.css']
})
export class TbComponent implements OnInit {

  public events = [ ];

  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  onSelect(event) {
    this.router.navigate(['/thunderbay', event.id]);
  }

}
