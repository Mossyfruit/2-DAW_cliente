import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = [
    'Spiderman',
    'Spiderwoman',
    'Hulk',
    'She Hulk',
    'Thor',
    'Wonderwoman'
    ];

  public deletedHero?: string;

  removeLastHero() {
    this.deletedHero = this.heroNames.pop();
  }

  resetHeroList() {
    this.heroNames = [
      'Spiderman',
      'Spiderwoman',
      'Hulk',
      'She Hulk',
      'Thor',
      'Wonderwoman'
      ];
    this.deletedHero='';
  }
}
