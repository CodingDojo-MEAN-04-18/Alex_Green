import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  powerLevel = 
    {pL: null}
;
  selectedNumber = 0;
  
  calculatePowerLevels(){
    
    this.selectedNumber = this.powerLevel.pL
    console.log(this.powerLevel.pL)
  }
}
