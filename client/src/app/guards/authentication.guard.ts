import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  private status = true
  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.authService.isLogged.subscribe(x => this.status = x);
      if (this.status) {
        return true;
      } else {
        console.log(this.authService.getToken())
        console.log(this.status)
      // Redirect to the login page and store the intended URL to redirect back after login
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
      }
  }
}

