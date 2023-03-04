import { Exercise } from "./exercise";

export class Workout{
    
    constructor() {
        this.date = new Date;
        this.exercises = [];
        this.label = "";
    }

    date: Date;
    exercises: Exercise[]
    label: string;
}