import { Component } from '@angular/core';
@Component({
  selector: 'app-counter',
  template:`
  <h3>Counter {{counter}}</h3>
  <button (click)="increaseBy(1)">+1</button>
  <button (click)="resetCouter()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>
  `,
})

export class CounterComponent  {
  public title:string = 'Mi primera app Angular';
  public counter:number = 10;
  increaseBy( operator:number ):void{
    this.counter += operator;
   }
   resetCouter(){
     this.counter = 10;
   }
}



// import { Component } from '@angular/core';


// @Component({
//   selector: 'app-counter',
//   template:'<h1>Hola Counter<h1>',
// })

// export class CounterComponent{

// }
