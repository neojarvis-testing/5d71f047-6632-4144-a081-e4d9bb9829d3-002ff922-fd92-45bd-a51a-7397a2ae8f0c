import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login.model';
import { AuthService } from 'src/app/services/auth.service';
import jwt_decode from 'jwt-decode';

interface JwtPayload {
  sub: string;
  role: string;
  userId: number;
  iat: number;
  exp: number;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginModel: Login = {
    email: '',
    password: ''
  }
  emailTouched = false;
  passwordTouched = false;
  loginError: string | null = null;


  constructor(private authService: AuthService,private router: Router) {}

  get emailValid(): boolean {
    // Simple email regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return this.loginModel.email.trim() !== '' && emailRegex.test(this.loginModel.email);
  }

  get passwordValid(): boolean {
    return this.loginModel.password.trim() !== '';
  }

  get formValid(): boolean {
    return this.emailValid && this.passwordValid;
  }

  login() {
    this.emailTouched = true;
    this.passwordTouched = true;
    this.loginError = null;

    if (!this.formValid) {
      return;
    }

  this.authService.login(this.loginModel).subscribe({
      next: (token: string) => {
        // Save token
        localStorage.setItem('token', token);

        // Decode token to get user role and id
        const decodedToken = jwt_decode<JwtPayload>(token);

        const userRole = decodedToken.role;
        const userId = decodedToken.userId;

        localStorage.setItem('userRole', decodedToken.role);
        localStorage.setItem('userId', decodedToken.userId.toString());

        if (userRole === 'ADMIN') {
            this.router.navigate(['/admin']);
          } else if (userRole === 'USER') {
            this.router.navigate(['/user']);
          } else {
            this.loginError = 'Unauthorized role';
          }
      },
      error: (err) => {
        console.error(err);
        this.loginError = 'Invalid email or password.';
      }
    });
  }
}
