import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  score: number = 0;
  gamecondition: boolean = true;
  @Output() gameStarted = new EventEmitter<{score: number, gamecondition: boolean}>();

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    this.gamecondition = true;
    setInterval( () => {
      let i = this.score;
      i ++;
      this.score = i;
      this.gameStarted.emit({score: this.score, gamecondition: this.gamecondition});
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
