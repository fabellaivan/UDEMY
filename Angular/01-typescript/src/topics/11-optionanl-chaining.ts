
export  interface Passenger{
    name:string;
    children?:string[];
}

const passenger1: Passenger={
    name: 'Ivan'
}
const passenger2: Passenger={
    name:'Aldana',
    children:['Abu','Luna'],
}

// const printChildren=(passanger:Passenger)=>{

//     // const howManChildren = passanger.children?.length || 0;
//     const howManChildren = passanger.children?.length ;-> Si exisiten children, retorna el length, sino undefined
//     console.log(passanger.name,howManChildren);
// }
const printChildren=(passanger:Passenger):number=>{

    // const howManChildren = passanger.children?.length || 0;
    const howManChildren = passanger.children!.length ;//Con el ! le digo a typescript que siempre va a recibir un numero
    console.log(passanger.name,howManChildren);
    return howManChildren;
}
// Operador ? 
// Como hago una calculadora?
printChildren(passenger2);