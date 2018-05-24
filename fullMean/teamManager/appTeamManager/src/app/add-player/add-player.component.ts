import { Component, OnInit } from '@angular/core';
import { PlayerManagementService } from '../player-management.service'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  newPlayer:any = {
    name: '',
    position: '',
  }

  constructor(private playerService: PlayerManagementService,
              private route: ActivatedRoute,
              private router: Router) { }
  //on form submit, add player to db
  addPlayers(){
    console.log("submitting form", this.newPlayer)
    this.playerService.addPlayers(this.newPlayer)
    .subscribe(
      (response) => {
        // this.playerService.getPlayers();
        console.log("from add player",response)
      },
      (err) => {
        console.log("error in list component delete player", err)
      }
    ) 
    console.log("addPlayComponent > after adding in service")
    this.newPlayer.name = '';
    this.newPlayer.position = '';
    this.router.navigate([''])
  }


  ngOnInit() {
  }

}
