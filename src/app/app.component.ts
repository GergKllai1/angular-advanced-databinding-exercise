import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenNumbers = [];
  oddNumbers = [];
  @Output() evenNumberFound = new EventEmitter<{number: number, gamecondition: boolean}> ();
  @Output() oddNumberFound = new EventEmitter<{score: any}> ();



  increaseGameScore(event) {
    if(event.gamecondition === true){
      if(event.score % 2 === 0){
        this.evenNumbers.push(event.score)
      }else if(event.score % 2 === 1){
        this.oddNumbers.push(event.score)
      }
    }
  }
}

