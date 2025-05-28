import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model'; // my User model path
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user: User = {
    userId: 0,
    email: '',
    password: '',
    username: '',
    mobileNumber: '',
    userRole: ''
  };
  
 message: string = '';
  confirmPassword: string = '';
  showModal: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  onRegister(): void {
    if (!this.isValidEmail(this.user.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!this.isValidMobile(this.user.mobileNumber)) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }

    if (this.user.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (!this.user.userRole) {
      alert('Please select a role!');
      return;
    }

    this.authService.register(this.user).subscribe({
      next: () => {
        this.message = 'Registration successful!';
        this.router.navigate(['/login']); // Show modal
      },
      error: (err) => {
        alert('Registration failed: ' + (err.error?.message || 'Server error'));
      }
    });
  }

  isValidEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  isValidMobile(mobile: string): boolean {
    const regex = /^\d{10}$/;
    return regex.test(mobile);
  }

  closeModal(): void {
    this.showModal = false;
    this.router.navigate(['/login']);
  }
}
