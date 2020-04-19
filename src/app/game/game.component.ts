import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  title = 'pig-game';
  player1 : string = 'Player 1';
  player2 : string = 'Player 2';
  p1score : number = 0;
  p2score : number = 0;
  current1 : number = 0;
  current2 : number = 0;
  sum : number = 0 ;
  p1active = true ;
  gameMode = true ;
  p1 : string = 'active';
  p2 : string = '';
  newGame = false;
  dice : string = 'assets/dice-pics/dice-1.png';

  constructor(private router : Router, private route : ActivatedRoute){}

  roll(){
    this.newGame = true;
    const num = (Math.floor(Math.random()*6)) + 1;
    if(num !==1)
    {
    this.sum += num ;
    this.dice = 'assets/dice-pics/dice-' + num + '.png';
    if(this.p1active){
      this.current1 = this.sum;
    }
    else{
      this.current2 = this.sum;
    }
    }
    else{
      this.dice = 'assets/dice-pics/dice-' + num + '.png';
      setTimeout(() => {
        this.current1 = 0;
        this.current2 = 0;
        this.sum = 0;
        this.toggle(); 
      }, 200);
    }
  
  }

  toggle(){
    this.p1active = !this.p1active ;
   if(this.p1 === 'active')
    {
    this.p1 = '';
    this.p2 = 'active';
    }
    else{
      this.p2 = '';
      this.p1 = 'active';
    }
  } 

  hold(){
    if(this.p1active){
      this.p1score += this.current1;
      if(this.p1score >= 50){
        this.player1 = 'Winner !!';
        this.gameMode = false;
      }
    }
    else{
      this.p2score += this.current2;
      if(this.p2score >= 50){
        this.player2 = 'Winner !!';
        this.gameMode = false;
      }
    }
    this.toggle();
    this.current1 = 0;
    this.current2 = 0;
    this.sum = 0;
  }

  reset(){
    this.gameMode = true;
    this.current1 = 0;
    this.current2 = 0;
    this.p1score = 0;
    this.p2score = 0;
    this.newGame = false;
    this.p1 = 'active';
    this.p2 = '';
    this.player1 = 'Player 1';
    this.player2 = 'Player 2';
  }

  rules(){
    this.router.navigate(['rules'],{relativeTo : this.route});
  }
}
