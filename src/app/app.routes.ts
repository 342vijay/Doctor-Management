import { Routes } from '@angular/router';
import { Dashboard } from './Components/dashboard/dashboard';
import { Mode } from './Components/mode/mode';
import { Online } from './Components/online/online';
import { Offline } from './Components/offline/offline';
import { Confirmation } from './Components/confirmation/confirmation';
import { GetMyBooking } from './Components/get-my-booking/get-my-booking';
import { Success } from './Components/success/success';

export const routes: Routes = [
     { path: '', component: Dashboard },
     { path: 'mode', component: Mode },
     {path:'online',component:Online},
     {path:'offline',component:Offline},
     {path:'confirmation',component:Confirmation},
     {path:'myappointment',component:GetMyBooking},
     {path:'success',component:Success},
     { path: '**', redirectTo: '' }
     


     
];
