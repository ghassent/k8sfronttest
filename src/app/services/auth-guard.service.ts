import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { tap, map, take } from 'rxjs/operators';
import { FuseConfigService } from '@fuse/services/config.service';
import { Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  response: any;
 
  constructor( private router: Router, private fuseConfig :FuseConfigService,public http:Http) {}
  
 
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${localStorage.getItem('token')}`);
    let options = new RequestOptions({ headers: headers });
     return this.http.get('https://canary-247013.appspot.com/bo/admin/is_authorized',options).pipe(
      map(res => {
        if (res['Error']) {
          alert("Movie not found at guard!");
          return false;
        } else {
          return true;
        }
      }),

    );
 
  }

 }
  