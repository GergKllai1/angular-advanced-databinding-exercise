import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  score: number = 0

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    setInterval( () => {
      let i = this.score;
      i ++;
      this.score = i;
    }, 1000)
  }
}
