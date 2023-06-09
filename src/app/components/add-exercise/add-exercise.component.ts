import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { Exercise } from 'src/app/models/exercise';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-add-exercise',
    templateUrl: './add-exercise.component.html',
    styleUrls: ['./add-exercise.component.scss']
})
export class AddExerciseComponent implements OnInit {
    @Input() exercise: Exercise = new Exercise;
    uniqueId: number;
    
    exerciseNames: string[] = [];

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        this.exerciseNames = this.dataService.getExerciseNames();
        this.exercise.sets = [
            {
                numReps: 0,
                weight: ''
            }
        ]

        this.dataService.exerciseNamesSub.subscribe(newValues => {
            this.exerciseNames = newValues;
        })

        this.uniqueId = Math.random() * 10000;
    }

    addSet(): void{
        this.exercise.sets.push({
            numReps: 0,
            weight: ''
        })
    }
}
