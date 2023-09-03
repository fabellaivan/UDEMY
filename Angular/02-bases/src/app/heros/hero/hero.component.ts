import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public  name :string = 'Ironman PAH';
  public age: number = 45;

  get capitalizeName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${this.name}-${this.age}`;
  }
  ngOnInit(): void {
    const button = document.getElementById('clicCambio');
    if (button) {
      button.addEventListener('click', this.changeHero.bind(this));
    }
  }

  changeHero():void {
    this.name = 'Dr Strange';
  }
  changeAge():void {
  this.age = 20;
  }
  resetForm():void {
    this.name = 'Ironman PAH';
    this.age = 45;
  }
}
