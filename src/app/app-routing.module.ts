import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateWorkoutComponent } from './components/create-workout/create-workout.component';
import { ViewWorkoutsComponent } from './components/view-workouts/view-workouts.component';

const routes: Routes = [
    { path: 'view', component: ViewWorkoutsComponent },
    { path: 'create', component: CreateWorkoutComponent },
    { path: '**', component: ViewWorkoutsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
