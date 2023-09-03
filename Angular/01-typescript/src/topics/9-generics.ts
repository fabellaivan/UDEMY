
export function whatsMyType<T>(argument:T):T{

    return argument;
}

const amIString = whatsMyType<string>('Hola Mundo');
let amINumber = whatsMyType(100);
let amIArray = whatsMyType<number[]>([1,2,3,4]);

console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));