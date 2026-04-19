import { Routes } from '@angular/router';


import { Dashboard } from './Components/dashboard/dashboard';
import { Mode } from './Components/mode/mode';
import { Offline } from './Components/offline/offline';
import { Online } from './Components/online/online';
import { Confirmation } from './Components/confirmation/confirmation';
import { Success } from './Components/success/success';
import { GetMyBooking } from './Components/get-my-booking/get-my-booking';
import { Login } from './Components/Auth/Features/login/login';
import { Register } from './Components/Auth/Features/register/register';
import { authguardGuard } from './Components/Auth/Core/authguard-guard';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'register', component: Register },

  { path: 'dashboard', component: Dashboard, canActivate: [authguardGuard] },
  { path: 'mode', component: Mode, canActivate: [authguardGuard] },
  { path: 'online', component: Online, canActivate: [authguardGuard] },
  { path: 'offline', component: Offline, canActivate: [authguardGuard] },
  { path: 'confirmation', component: Confirmation, canActivate: [authguardGuard] },
  { path: 'myappointment', component: GetMyBooking, canActivate: [authguardGuard] },
  { path: 'success', component: Success, canActivate: [authguardGuard] },

  { path: '**', redirectTo: '' }
];