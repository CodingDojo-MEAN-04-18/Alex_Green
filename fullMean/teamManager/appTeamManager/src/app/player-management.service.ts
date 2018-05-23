import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerManagementService {

  // users: any = [];
  subject:any = new BehaviorSubject([]);

  constructor(private http:HttpClient) {  }

  getPlayers(){
    this.http.get('/allPlayers')
    .subscribe(
      (response) => {
        console.log("success", response)
        this.subject.next(response)
      },
      (error) => {
        console.log("error", error)
      }
    )
  }

  deletePlayer(player) {
    console.log("before hitting deleteplayer in server.js")
    this.http.post('/deletePlayer', player)
    .subscribe(
      (response) => {
        console.log("success", response)
        this.subject.next(response)
      },
      (error) => {
        console.log("error", error)
      }
    )
  }

  editPlayer(player, status, game) {
    console.log("hitting edit player in service.ts ")
    this.http.post('/editPlayer/'+player._id+'/'+game+'/'+status, player, status)
    .subscribe(
      (response) => {
        console.log("success", response)
        this.subject.next(response)
      },
      (error) => {
        console.log("error", error)
      }
    )
  }

  addPlayers(player){
    this.http.post('/processPlayer', player)
    .subscribe(
      data => {
        console.log("player add. logging from service.ts")
      }
    )
  }

}
