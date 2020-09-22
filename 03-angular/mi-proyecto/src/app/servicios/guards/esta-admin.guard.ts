import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {AuthService} from "../auth/auth.service";
import {Observable} from "rxjs";

@Injectable()
export class EstaAdminGuard implements CanActivate{
  constructor(
    private readonly _autService: AuthService
  ) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isAdmin = this._autService
      .role.some(
        (role)=>{
          return role == 'admin'
        }
      );
    return isAdmin;
  }

}
