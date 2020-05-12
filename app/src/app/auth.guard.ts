import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, CanActivateViewChild, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './service/user.service';
import { SoundService } from './service/sound.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateViewChild {

  constructor(
    private login: UserService,
    private route: Router,
    private sound: SoundService,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.sound.preLoaded.action[1].play();
    return (!0
      && !!this.login.user
      || (!this.route.navigate(['/login'])));
  }

  canActivateViewChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.canActivate(next, state);
  }
}
