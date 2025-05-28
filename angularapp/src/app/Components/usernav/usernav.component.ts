import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usernav',
  templateUrl: './usernav.component.html',
  styleUrls: ['./usernav.component.css']
})
export class UsernavComponent {
  constructor(private router: Router) {}
  logoutConfirmation: boolean = false;

  logout() {
    localStorage.clear();
    this.logoutConfirmation = true; // or remove only token if preferred
    window.location.href = '/login'; // or use Angular router: this.router.navigate(['/login']);
  }
  confirmLogout() {
  localStorage.clear();
  this.router.navigate(['/login']);
}

  cancelLogout() {
  this.logoutConfirmation = false;
}
}



