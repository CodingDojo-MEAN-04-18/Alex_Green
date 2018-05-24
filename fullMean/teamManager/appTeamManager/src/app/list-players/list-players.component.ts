import { Component, OnInit } from '@angular/core';
import { PlayerManagementService } from '../player-management.service'

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.css']
})
export class ListPlayersComponent implements OnInit {
  allPlayers:any = []

  constructor(private playerService: PlayerManagementService) {
  
}

  ngOnInit() {
    this.playerService.getPlayers()
    .subscribe(
      (response) => {
        console.log("success in list component!", response);
        this.allPlayers = response;
      },
      (err) => {
        console.log("error in list component!!", err)
      }
    )
  }

  deletePlayer(player){
    let confirm = window.confirm(`Are you sure you want to delete ${player.name}?`)
    if (confirm == true){
    console.log("You pushed confirm to delete ", player.name)
    this.playerService.deletePlayer(player)
    .subscribe()    
    this.playerService.getPlayers()
    .subscribe(
      (response) => {
        console.log("success in list component! delete player", response);
        this.allPlayers = response;
      },
      (err) => {
        console.log("error in list component!!", err)
      }
    )
    
    } else {
      console.log("you cancelled")
    }
  }


}
