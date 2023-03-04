import { Component, Input, OnInit } from '@angular/core';
import { Workout } from 'src/app/models/workout';

@Component({
    selector: 'app-view-workout-item',
    templateUrl: './view-workout-item.component.html',
    styleUrls: ['./view-workout-item.component.scss']
})
export class ViewWorkoutItemComponent implements OnInit {

    @Input() workout: Workout;
    isMinimised: boolean = true;
    
    constructor() {
        this.workout = new Workout();
    }

    ngOnInit(): void {
    }

}
