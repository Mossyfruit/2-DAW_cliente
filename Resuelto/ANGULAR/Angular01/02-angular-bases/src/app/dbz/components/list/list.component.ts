import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Output()
  public onDeleteCharacter:EventEmitter<number> = new EventEmitter();
  public onUpdateCharacter:EventEmitter<Character>= new EventEmitter();
  @Input() // No olvidar importar el decorador Input
  public characters: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  emitId(id:number): void {
    this.onDeleteCharacter.emit(id);
  }
  emitCharacter(character: Character):void{
    this.onUpdateCharacter.emit(character);
  }
}
