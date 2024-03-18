import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input type="text"
      class="form-control"
      placeholder="Buscar gifs..."
      (keyup.enter)="searchTag()"
      #txtTagInput
    >
  `
})
export class SearchBoxComponent implements OnInit {
  @ViewChild('txtTagInput')
  tagInput!: ElementRef<HTMLInputElement> ;
  constructor(private gifsServices: GifsService) { }

  searchTag(){
    const newTag = this.tagInput.nativeElement.value;
    // console.log({newTag});
    this.gifsServices.searchTag(newTag);
    this.tagInput.nativeElement.value = '';

  }
  ngOnInit() { }
}
