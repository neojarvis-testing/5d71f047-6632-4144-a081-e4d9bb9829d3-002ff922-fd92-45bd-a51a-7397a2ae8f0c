import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adminnav',
  templateUrl: './adminnav.component.html',
  styleUrls: ['./adminnav.component.css'] 
})
export class AdminnavComponent {
  constructor(private router: Router) {}
  logout() {
    localStorage.clear(); // or remove only token if preferred
    window.location.href = '/login'; // or use Angular router: this.router.navigate(['/login']);
  }
}
