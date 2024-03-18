import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gifs, SearchResponse } from '../interfaces/interfaces';

@Injectable({providedIn: 'root'})
export class GifsService {

  private _tagHistory:string[]=[];
  private apiKey:string = 'api_key=jCi1YB2EOy5fAVfk7UEM0MFL46lZb4kW&';
  private stringHttp:string = 'http://api.giphy.com/v1/gifs/';
  public gifList:Gifs[] = [];
  constructor(private http:HttpClient) {
    this.loadLocalStorage();
  }

  private saveLocalStorage():void{
    localStorage.setItem('history', JSON.stringify(this.tagHistory));
  }

  private loadLocalStorage():void{
    if(!localStorage.getItem('history')) return;

    this._tagHistory = JSON.parse( localStorage.getItem('history')!);

    if(this._tagHistory.length === 0 ) return;

    this.searchTag(this._tagHistory[0]);
  }

  get tagHistory(){
    return [...this._tagHistory];//... hace una copia del arreglo para que no pueda modificarse. En terminos de memoria, no se pasa la direccion del tagHistory, sino una copia
  }

  private organizeHistory(tag:string){
    tag = tag.toLocaleLowerCase();
    if(this._tagHistory.includes(tag)){
      this._tagHistory = this._tagHistory.filter((oldTag)=>oldTag!==tag);//pop
    }
    this._tagHistory.unshift(tag);
    this._tagHistory = this.tagHistory.splice(0,10);
    this.saveLocalStorage();
  }
  // async searchTag(tag:string):Promise<void>{
  searchTag(tag:string){
  if(tag.length === 0 ) return;

    this.organizeHistory(tag)

    const params = new HttpParams()
    .set('q',tag)
    .set('limit','10');


    this.http.get<SearchResponse>(this.stringHttp+'search?api_key=jCi1YB2EOy5fAVfk7UEM0MFL46lZb4kW&',{params})
    .subscribe((resp) =>{
      console.log(resp.data);

      this.gifList = resp.data;

    })


    // fetch('http://api.giphy.com/v1/gifs/trending?api_key=jCi1YB2EOy5fAVfk7UEM0MFL46lZb4kW&q=valorant&limit=10')
    // .then(resp=> resp.json())
    // .then(data => console.log(data));
    // this._tagHistory.unshift(tag);//unshift agrega al principio del arreglo
    console.log(this._tagHistory);
  }




}
