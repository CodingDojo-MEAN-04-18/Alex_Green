import { Component, OnInit } from '@angular/core';
import { GitHubService } from './git-hub.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  username = '';
  thisUser = {};
  score:number = null;

    constructor(private gitHubService: GitHubService) {}

    ngOnInit(){ }

    onFormSubmit(form){
      // console.log(form, "form")   
      // console.log(this.username, "new test")
      this.gitHubService.getUserInfo(this.username).subscribe(
        (user:any = {}) => { this.thisUser = user; 
        console.log("user name from component", user);
        this.score = user.followers + user.public_repos
      }
      )   
      // console.log(this.username, "username from app component")   
      // console.log(this.thisUser, "thisUser")
      this.username = '';
      // this.gitHubService.user.subscribe(
      //   (username) => { this.username = username; console.log("user name from component", username, "end of component")}
      // )   
      
    }
}
