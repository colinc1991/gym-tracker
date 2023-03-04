import { WorkoutSet } from "./set";

export class Exercise{
    constructor() {
        this.exerciseName = "";
        this.sets = [];
    }

    exerciseName: string;
    sets: WorkoutSet[];
}