import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { UserProfileComponent } from './userprofile/userprofile/userprofile.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'profile', component: UserProfileComponent }, // New route for UserProfileComponent
];
