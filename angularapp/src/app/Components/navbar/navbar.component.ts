import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  userRole: string | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkLoginStatus();
  }

  checkLoginStatus(): void {
    const token = localStorage.getItem('token');
    this.isLoggedIn = !!token;

    if (token) {
      try {
        const decodedToken: any = jwt_decode(token);
        this.userRole = decodedToken.role; // assuming `role` is set in JWT claims
      } catch (error) {
        console.error('Invalid token', error);
        this.logout(); // logout if token is bad
      }
    }
  }

  logout(): void {
    localStorage.clear();
    this.isLoggedIn = false;
    this.userRole = null;
    this.router.navigate(['/home']);
  }
}
