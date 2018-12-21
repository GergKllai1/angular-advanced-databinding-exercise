import { Component } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gamescore = []

  increaseGameScore(event) {
    if(event.gamecondition === true){
      this.gamescore.push(event.score)
      console.log(this.gamescore)
    }
  }
}

