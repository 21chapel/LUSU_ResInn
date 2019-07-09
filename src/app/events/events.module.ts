import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { EventsComponent }  from './events.component';
import { EventsRoutingModule } from './events-routing.module';

@NgModule({
  imports:      [ CommonModule, SharedModule, FormsModule, EventsRoutingModule ],
  declarations: [ EventsComponent ],
  exports: [ EventsComponent ]
})
export class CustomersModule { }