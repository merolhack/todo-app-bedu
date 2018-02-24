import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { take, map, tap } from 'rxjs/operators'

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.user
      .pipe(
        take(1),
        map(user => !!user),
        tap(logedIn => {
          if (!logedIn) {
            console.log('Acces denied!!');
            this.router.navigate(['/login']);
          }
        })
      );
  }
}
