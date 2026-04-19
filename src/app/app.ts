import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Dashboard } from "./Components/dashboard/dashboard";
import { NavBar } from "./Components/nav-bar/nav-bar";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('doctorappointment');
  constructor(private router: Router) {}

  showNavbar(): boolean {
    const hiddenRoutes = ['/', '/register'];
    return !hiddenRoutes.includes(this.router.url);
  }
}
