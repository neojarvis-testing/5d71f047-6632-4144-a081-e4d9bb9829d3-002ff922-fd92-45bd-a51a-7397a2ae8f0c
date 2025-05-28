import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    
    const token = localStorage.getItem('token');
    const expectedRole = route.data['expectedRole'];
    const userRole = localStorage.getItem('role'); // assuming 'role' is stored in localStorage

    if (token && (!expectedRole || userRole === expectedRole)) {
      return true;
    }

    // Navigate to login if not authenticated or role mismatch
    this.router.navigate(['/login']);
    return false;
  }
}
