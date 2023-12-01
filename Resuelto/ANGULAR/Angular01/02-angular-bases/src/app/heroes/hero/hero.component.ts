import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  getDescripcionHero(): string {
    return this.name + ' - ' + this.age;
  }

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  changeName(): string {
    return this.name = 'Jota';
  }

  changeAge(): number {
    return this.age = 48;
  }
}
