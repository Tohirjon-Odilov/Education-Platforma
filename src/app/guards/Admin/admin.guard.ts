import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(route: any, state: any): boolean {
    if (this.authService.isAuthenticated()) {
      const decodedToken = this.authService.decodeToken();
      if (decodedToken && decodedToken.role && decodedToken.role.toLowerCase() === 'admin') {
        return true;
      } else {
        this.router.navigate(['/not-found']);
        return false;
      }
    } else {
      this.router.navigate(['/register']);
      return false;
    }
  }
}
