import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoginDto } from '../Dto/LoginDto';
import { tap } from 'rxjs';
import { RegisterDto } from '../Dto/RegisterDto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

private http=inject(HttpClient)

  private authurl="https://localhost:7037/api/Auth";

  
  login(dto: LoginDto) {
    return this.http.post<{ token: string }>(`${this.authurl}/login`, dto).pipe(
      tap(res => {
        localStorage.setItem('token', res.token); 
      })
    );
  }

  register(data:RegisterDto){
    return this.http.post(`${this.authurl}/register`,data,
    { responseType: 'text' });
  }
  getToken(){
    return localStorage.getItem('token');
  }
  isLoggedIn():boolean{
    return  !!this.getToken();
  }
  logout(){
    localStorage.removeItem('token');
    
  }

}
