import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  heroNames: string[] = ['Spiderman','Iroman','Hulk'];
  public heroBorrado?: string ;
  removeLastHero() :void{
    this.heroBorrado = this.heroNames.pop();
  }
}
