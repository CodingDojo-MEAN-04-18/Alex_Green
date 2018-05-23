import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ListPlayersComponent } from './list-players/list-players.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { PlayerStatusComponent } from './player-status/player-status.component';
import { ListAndAddComponent } from './list-and-add/list-and-add.component';

const routes: Routes = [
  {path: '', component: ListAndAddComponent, children:[
    {path: '', component: ListPlayersComponent},
    {path: 'players/addPlayer', component: AddPlayerComponent}
  ]},
  // {path: 'players/list', component: ListPlayersComponent},
  // {path: 'players/addPlayer', component: AddPlayerComponent},
  {path: 'status', component: PlayerStatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
