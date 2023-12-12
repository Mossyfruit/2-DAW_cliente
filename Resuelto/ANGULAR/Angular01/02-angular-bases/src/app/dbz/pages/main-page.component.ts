import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {
  public characters: Character[] = [{
    name: 'Krillin',
    power: 1000
  }, {
    name: 'Goku',
    power: 9500
  }, {
    name: 'Shishi',
    power: 9500
  }, {
    name: 'Bulma',
    power: 9500
  }, {
    name: 'Vegeta',
    power: 7500
  }];

  onNewCharacter(character: Character): void {
    console.log("Desde main: ",character);
    this.characters.push({...character});
  }
  onDeleteCharacter(id: number): void {
    console.log("Desde main: ",id);
    this.characters.splice(id,1);
  }
  onUpdateCharacter(character: Character):void{
    this.onDeleteCharacter()
  }
}
