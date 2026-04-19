import { Component, inject } from '@angular/core';
import { AuthService } from '../../../../Services/auth-service';
import { Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginDto } from '../../../../Dto/LoginDto';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

private auth = inject(AuthService);
  private router = inject(Router);

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  login() {

    const dto: LoginDto = {
      Username: this.loginForm.value.username!,
      Password: this.loginForm.value.password!
    };

    this.auth.login(dto).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']); 
      },
      error: () => {
        alert('Invalid username or password ');
      }
    });
  }

}
