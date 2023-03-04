import { Injectable } from '@angular/core';
import { Workout } from '../models/workout';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    workouts: Workout[];
    exerciseNames: string[];

    constructor() {
        this.workouts = [];
        this.exerciseNames = [];
    }

    getWorkouts(): Workout[] {
        return this.workouts.slice();
    }

    getDummyWorkouts(): Workout[] {
        this.workouts = [
            {
                date: new Date,
                label: "Legs",
                exercises:
                [
                    {
                        exerciseName: 'Hip thrusts',
                        sets: [
                            {
                                numReps: 15,
                                weight: '20kg'
                            },
                            {
                                numReps: 15,
                                weight: '20kg'
                            },
                            {
                                numReps: 15,
                                weight: '20kg'
                            },
                        ]
                    },
                    {
                        exerciseName: 'Cable single leg kickbacks',
                        sets: [
                            {
                                numReps: 15,
                                weight: '10kg'
                            },
                            {
                                numReps: 15,
                                weight: '10kg'
                            },
                            {
                                numReps: 15,
                                weight: '10kg'
                            },
                            {
                                numReps: 15,
                                weight: '10kg'
                            },
                        ]
                    },
                    {
                        exerciseName: 'Standing abduction',
                        sets: [
                            {
                                numReps: 15,
                                weight: '30kg'
                            },
                            {
                                numReps: 15,
                                weight: '30kg'
                            },
                            {
                                numReps: 15,
                                weight: '30kg'
                            },
                        ]
                    }
                ],
                
            }
        ]

        return this.workouts;
    }

    getExerciseNames(): string[]{
        if (this.workouts.length == 0){
            this.workouts = this.getDummyWorkouts();
        }
        return this.workouts.map(w => w.exercises.map(s => s.exerciseName)).flat().sort();
    }

    exerciseAlreadyExists(exerciseName: string): boolean{
        if (this.exerciseNames.length == 0){
            this.exerciseNames = this.getExerciseNames();
        }
        let lowercaseExercises = this.exerciseNames.map(e => e.toLowerCase());

        return lowercaseExercises.includes(exerciseName.toLowerCase())
    }

    addExerciseName(exerciseName: string){
        this.exerciseNames.push(exerciseName);
    }
}