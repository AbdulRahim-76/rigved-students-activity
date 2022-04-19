import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticGuard implements CanActivate {
  
  constructor(private _router: Router, private service: UserService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let login = this.service.getUsers();
    console.log(login);

    let userName = route.paramMap.get('name');
    let password = route.paramMap.get('pass');

    for (let i = 0; i < login.length; i++) {
      if (userName === login[i].username && password === login[i].password) {
        return true;
      }
    }

    alert('The username or password is incorrect !');
    this._router.navigate(['/login']);

    return false;
  }

}
