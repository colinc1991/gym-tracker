import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { CreateWorkoutComponent } from './components/create-workout/create-workout.component';
import { CreateSetComponent } from './components/create-set/create-set.component';
import { ViewWorkoutsComponent } from './components/view-workouts/view-workouts.component';
import { ViewWorkoutItemComponent } from './components/view-workout-item/view-workout-item.component';
import { AddExerciseComponent } from './components/add-exercise/add-exercise.component';

@NgModule({
    declarations: [
        AppComponent,
        MenuBarComponent,
        CreateWorkoutComponent,
        CreateSetComponent,
        ViewWorkoutsComponent,
        ViewWorkoutItemComponent,
        AddExerciseComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
