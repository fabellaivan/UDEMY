import { Product, taxCalc ,TaxCalcOptions} from './06-function-destructuring';
const shoppingCart:Product[]=[
    {
        description:'Nokia',
        price:150
    },
    {
        description:'Nokia',
        price:100
    }
];
const products:TaxCalcOptions = {
    tax:19,
    products:shoppingCart
}

const[total,tax]=taxCalc({
    products: shoppingCart,
    tax: 0.15
});
const[totalB,taxB]=taxCalc(products);
console.log(total,tax);
console.log(totalB,taxB);