import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {
  user: BehaviorSubject<any[]> = new BehaviorSubject([]);
  constructor(private http: HttpClient) { }


getUserInfo(username:string){
   return this.http.get(`https://api.github.com/users/${ username }`)
  //.subscribe(
  //   (userObj: any[]) => {
  //     this.user.next(userObj)
  //     console.log(userObj, "User object from service")
  //     console.log(this.user)
  //     }
  // );
}
}
