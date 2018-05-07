import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  allColors = ['red', 'green', 'black', 'gray', 'yellow', 'blue', 'purple', 'cyan', 'magenta', 'turquoise', 'teal', 'gold'];
  barcodeColors = []
  random = Math.floor(Math.random()*12);
  
  generateBarcode(){
    for (let y = 0; y < 10; y++) {
    const randNum = (Math.floor(Math.random() * 12) ) + 1;
    this.barcodeColors.push(this.allColors[randNum])
    console.log(this.barcodeColors)
    }
  } 
  ngOnInit() {
    this.generateBarcode();
  }
}

