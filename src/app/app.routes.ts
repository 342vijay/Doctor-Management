import { Routes } from '@angular/router';
import { Dashboard } from './Components/dashboard/dashboard';
import { Mode } from './Components/mode/mode';
import { Online } from './Components/online/online';
import { Offline } from './Components/offline/offline';

export const routes: Routes = [
     { path: '', component: Dashboard },
     { path: 'mode', component: Mode },
     {path:'online',component:Online},
     {path:'offline',component:Offline}
     


     
];
