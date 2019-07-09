import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { EventService } from './event.service';

@NgModule({
    imports: [ HttpClientModule ],
    providers: [ EventService ]
})
export class CoreModule { }