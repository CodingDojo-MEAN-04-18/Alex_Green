import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  thisUser = []
  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    apt: '',
    city: '',
    state: '',
    lucky: '',
  }
  onSubmitForm(){
    if(this.thisUser.length > 0){
      this.thisUser.pop();
      console.log("removed user")
      this.thisUser.push(this.user)
      console.log("pushed", this.user)
    } else{
    console.log("form submitted")
    console.log(this.user)
    this.thisUser.push(this.user)
    }
  }
}
