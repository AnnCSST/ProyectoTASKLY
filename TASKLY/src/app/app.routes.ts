import { Routes } from '@angular/router';


import { ViewHomeComponent } from './views/view-home/view-home.component';
import { ViewLoginComponent } from './views/view-login/view-login.component';
import { ViewRegisterComponent } from './views/view-register/view-register.component';
import { ViewProfileComponent } from './views/view-profile/view-profile.component';
import { ViewSettingsComponent } from './views/view-settings/view-settings.component';
import { ViewDashboardComponent } from './views/view-dashboard/view-dashboard.component';
import { ViewTasksComponent } from './views/view-tasks/view-tasks.component';
import { ViewProfileDetailsComponent } from './views/view-profile-details/view-profile-details.component';

export const routes: Routes = [
    { path: 'home', component: ViewHomeComponent },
    { path: 'login', component: ViewLoginComponent },
    { path: 'register', component: ViewRegisterComponent },
    { path: 'profile', component: ViewProfileComponent },  
    { path: 'profile/:id', component: ViewProfileDetailsComponent },  
    { path: 'settings', component: ViewSettingsComponent },
    { path: 'dashboard', component: ViewDashboardComponent },
    { path: 'tasks', component: ViewTasksComponent }
];

