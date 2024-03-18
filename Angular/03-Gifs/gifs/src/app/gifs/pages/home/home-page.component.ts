import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gifs } from '../../interfaces/interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',

})
export class HomePageComponent {

  constructor(private gifsServices: GifsService) {
  }

  get gifs():Gifs[]{
      return this.gifsServices.gifList;
  }
}
