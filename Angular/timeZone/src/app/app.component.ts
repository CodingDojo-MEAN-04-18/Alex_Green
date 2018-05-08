import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  time = new Date();
  selectedZone;

  onButtonClick(timezone){
    console.log(timezone)
    this.time = new Date();

    if (timezone === 'est'){
      this.time.setHours(this.time.getHours() + 3)
    } else if (timezone === 'cst'){
      this.time.setHours(this.time.getHours() + 2)
    } else if (timezone === 'mst'){
      this.time.setHours(this.time.getHours()+ 1)
    } this.selectedZone = timezone;
  } 
}
