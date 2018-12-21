import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  score: number = 0;
  gamecondition: boolean = true

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    this.gamecondition = true;
    setInterval( () => {
      let i = this.score;
      i ++;
      this.score = i;
      if(this.gamecondition === false){
        clearInterval(i)
        this.score = 0
      }
    }, 1000)
  }

  stopGame() {
    this.gamecondition = false;
  }
}
