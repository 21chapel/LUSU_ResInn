import { Time } from '@angular/common';

export interface Event {
    id: number,
    name: string,
    description: string,
    date: Date,
    speaker: string,
    speakerImg: string,
    img: string,
    time: Time,
    location: string
}