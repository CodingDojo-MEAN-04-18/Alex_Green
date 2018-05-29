import { Component } from '@angular/core';
import { NotesService } from './notes.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // allNotes is for form submission.
  // naming is backwards here. oh well. what can ya do.
  allNotes:any = {
    note: '',
  }
  // notes is where we collect all notes from database
  notes:any = []

  constructor (private noteService: NotesService){}

  // on init, get all of the notes
  ngOnInit(){
    this.noteService.getNotes().subscribe(
      (res:any) => {
        console.log("response", res)
        this.notes = res.reverse();
      },
      (err) => {console.log(err);}
    );
    console.log(this.notes);
    }

  // on formsubmit, submit the form and get all existing notes
  onFormSubmit(){
    console.log("submitting form", this.allNotes.note)
    this.noteService.addNote(this.allNotes)
    .subscribe()
    this.noteService.getNotes().subscribe(
      (res:any) => {
        console.log("response", res)
        this.notes = res.reverse();
      },
      (err) => {console.log(err);}
    );
    console.log(this.notes);
    this.allNotes.note = '';
  }
}
