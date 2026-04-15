import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mode',
  imports: [],
  templateUrl: './mode.html',
  styleUrl: './mode.css',
})
export class Mode {
  constructor(private router: Router) {}

  goToOnline() {
    this.router.navigate(['online']);
  }

  goToOffline() {
    this.router.navigate(['offline']);
  }
}
