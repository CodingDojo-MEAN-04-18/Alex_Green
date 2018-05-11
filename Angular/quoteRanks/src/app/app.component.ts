import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allQuotes = [];
  newQuote = {
    quote: '',
    author: '',
    score: 0,
  }

  onUpVote(aQuote){
    console.log("updoot", aQuote)
    aQuote.score += 1;
  }

  onDownVote(aQuote){
    aQuote.score -= 1;
  }

  onFormSubmit(){
    this.allQuotes.push(this.newQuote)
    console.log("form submitting")
    this.newQuote = {
      quote: '',
      author: '',
      score: 0
    }
  }

}
