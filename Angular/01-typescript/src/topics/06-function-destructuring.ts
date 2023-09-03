export interface Product{
    description:string;
    price:number;
}
export interface TaxCalcOptions{
    tax:number;//IVA
    products:Product[];
}
// function taxCalc(options:TaxCalcOptions):number[]{

//     let total = 0;
//     options.products.forEach(product =>  total += product.price);
//     return [total,total * options.tax];
// }

// function taxCalc({tax,products}:TaxCalcOptions):[number,number]{
//     let total = 0;
//     products.forEach(({price}) =>  total += price);
//     return [total,total * tax];
// }
export function taxCalc(options:TaxCalcOptions):[number,number]{
    const {tax,products} = options;
    let total = 0;
    products.forEach(({price}) =>  total += price);
    return [total,total * tax];
}

const phone:Product={
    description:'Nokia Product',
    price:150.0
}

const tablet:Product={
    description:'Tablet Product',
    price:150.0
}

const shoppingCart=[phone, tablet];
const tax = 0.15;


const result = taxCalc({
    products: shoppingCart,
  //  tax:tax,
    tax,
});
// console.log('Total',result[0],'Tax',result[1]);

// const [total,tax2] = taxCalc({
//     products: shoppingCart,
//     tax,
// });
// console.log('Total',total,'Tax',tax2);
