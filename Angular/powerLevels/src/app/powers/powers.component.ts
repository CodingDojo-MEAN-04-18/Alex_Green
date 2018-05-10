import { Component, OnInit, Input,OnChanges } from '@angular/core';

@Component({
  selector: 'app-powers',
  templateUrl: './powers.component.html',
  styleUrls: ['./powers.component.css']
})
export class PowersComponent implements OnInit, OnChanges {
  @Input() currentNumber;
  
  allPowerLevels = [null, null, null, null, null, null]


  constructor() { }

  ngOnChanges(){
    this.allPowerLevels[0] = this.currentNumber;
    this.allPowerLevels[1] = this.currentNumber * 10;
    this.allPowerLevels[2] = this.currentNumber * 90;
    this.allPowerLevels[3] = this.currentNumber * 150;
    this.allPowerLevels[4] = this.currentNumber * 250;
    this.allPowerLevels[5] = this.currentNumber * 500;


  }

  ngOnInit() {
  }

}
