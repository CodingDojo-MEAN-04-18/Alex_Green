import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPlayersComponent } from './list-players/list-players.component';
import { PlayerStatusComponent } from './player-status/player-status.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { ListAndAddComponent } from './list-and-add/list-and-add.component';
import { PlayerManagementService } from './player-management.service'

@NgModule({
  declarations: [
    AppComponent,
    ListPlayersComponent,
    PlayerStatusComponent,
    AddPlayerComponent,
    ListAndAddComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PlayerManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
