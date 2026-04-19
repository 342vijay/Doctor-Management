import { Component, inject } from '@angular/core';
import { AuthService } from '../../../../Services/auth-service';
import { Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RegisterDto } from '../../../../Dto/RegisterDto';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private auth = inject(AuthService);
  private router = inject(Router);
   registerForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  register(){
    const dto :RegisterDto= {
  Username: this.registerForm.value.username!,
  Password: this.registerForm.value.password!
};
    this.auth.register(dto).subscribe({
      next: (res) => {
        alert("Registration is Successful");
        this.router.navigate(['']);
        },
      error: (err) => {
  console.error("FULL ERROR:", err);
  console.error("BACKEND MESSAGE:", err.error);
  alert(err.error); //  THIS will tell exact reason
},
    });

  }
}
