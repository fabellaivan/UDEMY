
function addNumbers(a:any,b:any){

    return a+b;
}

addNumbers(2,2);

const result:string = addNumbers(2,2).toString();
console.log(result);

const addNumberArrow = (a:any,b:any):string=>{
return  `${a+b}`;
};

function multply( firstN:number, seconN?:number, base:number = 2){
    seconN;
    return firstN*base;
}

// const result1:number =addNumbers(1,2);
// const result2:string =addNumberArrow(1,2);

// const mult:number = multply(result1);
// console.log(result2,result1,mult);
interface Character{
    name: string;
    hp:number;
    showHp: ()=>void;
}
const healCharacter = (character:Character, amount:number) =>{
    character.hp += amount;
}
const strider : Character ={
    name: 'Aragon',
    hp: 50,
    showHp(){
      //  const hp: number = 100;
        console.log(`puntos de vida: ${this.hp}`);
    }
}

healCharacter(strider,10);
strider.showHp();
export{}