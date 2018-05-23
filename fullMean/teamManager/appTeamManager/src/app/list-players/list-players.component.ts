import { Component, OnInit } from '@angular/core';
import { PlayerManagementService } from '../player-management.service'

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.css']
})
export class ListPlayersComponent implements OnInit {
  allPlayers = []

  constructor(private playerService: PlayerManagementService) {
    this.playerService.subject.subscribe(
    (players) => {
      this.allPlayers = players
    }
  ) 
}

  ngOnInit() {
    this.playerService.getPlayers()
  }

  deletePlayer(player){
    let confirm = window.confirm(`Are you sure you want to delete ${player.name}?`)
    if (confirm == true){
    console.log("You pushed confirm to delete ", player)
    this.playerService.deletePlayer(player)
    this.playerService.getPlayers()
    
    } else {
      console.log("you cancelled")
    }
  }


}
