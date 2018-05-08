import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allButtons = []
  buttonMaker(){
    for(let i = 0; i < 10; i++){
      this.allButtons.push({
        id: i,
        clicked: false
      })
    }
  }

  onButtonClick(buttonId){
    if(buttonId.clicked === false){
    buttonId.clicked = true;
    document.getElementById(buttonId.id).innerHTML = "ON";
    } else {
      buttonId.clicked = false;
      document.getElementById(buttonId.id).innerHTML = "OFF";
    }
    console.log(buttonId)
  }
  
  ngOnInit(){
    this.buttonMaker();
  }
}
