import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RulesComponent } from './rules/rules.component';
import { GameComponent } from './game/game.component';

const approutes : Routes = [
  {path : 'rules', component : RulesComponent,pathMatch : 'full'},
  {path : '', component : GameComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RulesComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
