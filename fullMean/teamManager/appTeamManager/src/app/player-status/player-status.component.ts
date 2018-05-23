import { Component, OnInit } from '@angular/core';
import { PlayerManagementService } from '../player-management.service';


@Component({
  selector: 'app-player-status',
  templateUrl: './player-status.component.html',
  styleUrls: ['./player-status.component.css']
})
export class PlayerStatusComponent implements OnInit {
  allPlayers:any = [];

  game: number;
  game1: boolean = true;
  game2: boolean = false;
  game3: boolean = false;

  constructor(private playerService: PlayerManagementService) { 
    
    this.playerService.subject.subscribe(
      (players) => {
        this.allPlayers = players
      }
    )
  }
  thisGame:number;

  getGameOne(num){
    this.game1 = true;
    this.game2 = false;
    this.game3 = false;
    this.thisGame = num;
  }

  getGameTwo(num){
    this.game1 = false;
    this.game2 = true;
    this.game3 = false;
    this.thisGame = num;    
  }

  getGameThree(num){
    this.game1 = false;
    this.game2 = false;
    this.game3 = true;
    this.thisGame = num;    
  }

  gameStatus(player, status, game){
    console.log(player, status, game)
    this.playerService.editPlayer(player, status, game)
    this.playerService.getPlayers()
  }

  ngOnInit() {
    this.playerService.getPlayers()
  }

}
