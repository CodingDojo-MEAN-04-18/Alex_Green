import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NotesService {
  // data: BehaviorSubject<any[]> = new BehaviorSubject([]);;

  constructor(private http:HttpClient) { }

  getNotes(){
    return this.http.get('/notes')
  }

  addNote(note){
    console.log("NotesService > addNote", note)
    return this.http.post('/processNote', note)
   
  }
}
