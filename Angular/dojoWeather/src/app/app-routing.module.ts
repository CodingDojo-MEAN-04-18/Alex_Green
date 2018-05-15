import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeattleComponent } from './seattle/seattle.component'
import { SanjoseComponent } from './sanjose/sanjose.component'
import { WashingtonComponent } from './washington/washington.component';
import { DallasComponent } from './dallas/dallas.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { BurbankComponent } from './burbank/burbank.component';

const routes: Routes = [
  {path: 'seattle', pathMatch: 'full', component: SeattleComponent},
  {path: 'sanjose', pathMatch: 'full', component: SanjoseComponent},
  {path: 'washington', pathMatch: 'full', component: WashingtonComponent},
  {path: 'dallas', pathMatch: 'full', component: DallasComponent},
  {path: 'chicago', pathMatch: 'full', component: ChicagoComponent},
  {path: 'burbank', pathMatch: 'full', component: BurbankComponent},
  {path: '', component:SeattleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
