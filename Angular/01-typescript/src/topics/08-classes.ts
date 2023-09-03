export class Person{    
    constructor(public name?:string,public addres?:string){
        this.name = name;
        this.addres = addres;
    }
}

// export class Hero extends Person{

//     constructor(
//         public alterEgo:string,
//         public age:number,
//         public realName:string) {
//         super(realName,"El docke");
// const iroman = new Hero("IronMan",45,"Tony Stark");
//     }
// }
export class Hero {

    constructor(
        public alterEgo:string,
        public age:number,
        public realName:string,
        public person:Person,
        ) {

    }
}

const tony = new Person('Tony stark','New York')
const iroman = new Hero("IronMan",45,"Tony",tony);

console.log(iroman);