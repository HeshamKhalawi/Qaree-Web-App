import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const user =JSON.parse(localStorage.getItem('user')!);
    const token = user.stsTokenManager.accessToken
    if (!token) {
      localStorage.clear();
      this.router.navigate(['login'])
      console.log("itrue")
      return false;
    }
    else {
      return true;
    }
  }
}
