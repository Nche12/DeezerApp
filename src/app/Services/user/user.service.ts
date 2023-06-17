import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { IUser } from '../../interfaces/interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  cachedUser$! : Observable<IUser>;

  constructor(private http: HttpClient) { }

  getUser(userId: number) {
    if(!this.cachedUser$) {
      this.cachedUser$ = this.getUserInfo(userId);
    } 
    return this.cachedUser$;
  }

  getUserInfo(userId: number) {
    return this.http.get<IUser>(`${environment.apiUrl}/user/${userId}`);
  }

}
