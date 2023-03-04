import { Component, OnInit } from '@angular/core';
import { Workout } from 'src/app/models/workout';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-view-workouts',
    templateUrl: './view-workouts.component.html',
    styleUrls: ['./view-workouts.component.scss']
})
export class ViewWorkoutsComponent implements OnInit {

    workouts: Workout[];
    constructor(private dataService: DataService) {
        this.workouts = [];
    }

    ngOnInit(): void {
        this.workouts = this.dataService.getDummyWorkouts();
    }

}
