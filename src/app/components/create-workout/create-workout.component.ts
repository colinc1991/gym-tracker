import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Exercise } from 'src/app/models/exercise';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-create-workout',
    templateUrl: './create-workout.component.html',
    styleUrls: ['./create-workout.component.scss']
})
export class CreateWorkoutComponent implements OnInit {

    exercises: Exercise[] = [];
    creatingNewExercise: boolean = false;
    exerciseNameToBeAdded: string;
    exerciseAlreadyExists: boolean = false;
    @ViewChild('newExerciseTextBox') newExerciseTextBox: ElementRef;
    
    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        this.exercises = [{
            exerciseName: "",
            sets: []
        }]
    }

    addExercise(): void {
        this.exercises.push({
            exerciseName: "",
            sets: []
        })
    }

    addNewExercise(){
        if (!this.exerciseAlreadyExists){
            this.dataService.addExerciseName(this.exerciseNameToBeAdded);
            this.creatingNewExercise = false;
        }
    }

    checkExercises(){
        this.exerciseNameToBeAdded = this.newExerciseTextBox.nativeElement.value
        this.exerciseAlreadyExists = this.dataService.exerciseAlreadyExists(this.exerciseNameToBeAdded);
    }
}
