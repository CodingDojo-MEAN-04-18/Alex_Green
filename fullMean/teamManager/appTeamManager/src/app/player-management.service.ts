import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerManagementService {

  constructor(private http:HttpClient) {  }

  getPlayers(){
    return this.http.get('/allPlayers')
  }

  deletePlayer(player) {
    console.log("before hitting deleteplayer in server.js", player.name, player._id)
    return this.http.delete('/deletePlayer/'+player._id)

  }

  editPlayer(player, status, game) {
    console.log("hitting edit player in service.ts ")
    return this.http.put('/editPlayer/'+player._id+'/'+game+'/'+status, player)

  }

  addPlayers(player){
    return this.http.post('/processPlayer', player)

  }

}
