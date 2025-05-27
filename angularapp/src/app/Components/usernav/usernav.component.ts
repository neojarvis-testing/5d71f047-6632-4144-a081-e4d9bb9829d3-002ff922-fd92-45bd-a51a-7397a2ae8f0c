import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usernav',
  templateUrl: './usernav.component.html',
  styleUrls: ['./usernav.component.css']
})
export class UsernavComponent {
  constructor(private router: Router) {}
  logout() {
    localStorage.clear(); // or remove only token if preferred
    window.location.href = '/login'; // or use Angular router: this.router.navigate(['/login']);
  }
}
