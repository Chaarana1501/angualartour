import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegisterPayload} from './register-payload';
import {Observable} from 'rxjs';
import {LoginPayload} from './login-payload';
import {JwtAutResponse} from './jwt-aut-response';
import {map} from 'rxjs/operators';
import {LocalStorageService} from '../local-storage-service';
import {environment} from '../../environments/environment';
import {Store} from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = environment.baseUrl + 'api/auth/';

  constructor(private store: Store<any>,private httpClient: HttpClient, private localStoraqeService: LocalStorageService) {
  }

  register(registerPayload: RegisterPayload): Observable<any> {
    return this.httpClient.post(this.url + 'signup', registerPayload);
  }

  login(loginPayload: LoginPayload): Observable<boolean> {
    return this.httpClient.post<JwtAutResponse>(this.url + 'login', loginPayload).pipe(map(data => {
      this.localStoraqeService.store('authenticationToken', data.authenticationToken+"");
      this.localStoraqeService.store('username', data.username+"");
      this.store.dispatch({type:data.username+""});
      return true;
    }));
  }

  isAuthenticated(): boolean {
    return this.localStoraqeService.retrieve('username') != null;
  }

  getUser(): string {
    return this.localStoraqeService.retrieve('username') +"";
  }

  logout() {
    this.localStoraqeService.clear('authenticationToken');
    this.localStoraqeService.clear('username');
  }
}
