// // Get Random Int Function
// export function getRandomInt(length) {
//     return Math.floor(Math.random() = length);
// }
// // a random int(and # value in the array)
import products from '../common/api.js';

export function findbyProduct(products, id) {

    for (i = 0; i < products.length; i++) {
        return(products[i])
    }

};

export function getRandom3 (products) {
    for (let i = 0; i < 3; i++) {
        let idx = Math.floor(Math.random() * products.length);
        newProducts.push(products[idx]);
        products.splice(idx, 1);
    }
};
// doubble check and see if this is correct. 


//SHUFFLE ARRAY return 3
const getRandomProducts = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};

// original array
let arr = [];

// number of random elements to get from arr
let n = 3;

let count = 0;
// new array to push random item in
let newProducts = [];
do {
    let item = getRandomProducts(arr);
    newProducts.push(item);
    // update the original array and remove the recently pushed item
    arr.splice(arr.indexOf(item), 1);
    count++;
} while (count < n);

console.log(newProducts);
console.log(arr);


// ////////////////////////////////////////////////////////////////
export function findById(id, array) {
    let result = null;

    array.forEach(arrayItem => {
        if (id === arrayItem.id) {
            result = arrayItem; }
    });
    return result;
}