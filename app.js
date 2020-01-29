import products from './common/api.js';

const productsData = products.slice();

export function findById(items, id) {
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.id === id) {
            return item;
        }
    }
}

//Keep track of how many times the user voted
//keep track for votes for given project

let totalVotes;
let productVoteDetails;

const initializeState = () => {
    totalVotes = 0;
    productVoteDetails = [];
};

initializeState();

//display 3 random non-duplicated prods
//display 3 new non duplicates*refresh products between votes

const displayThreeProducts = () => {
    //get the random products from our array
    const product1 = getRandomProduct(productsData);
    let product2 = getRandomProduct(productsData);
    let product3 = getRandomProduct(productsData);

    //makesure prods are not the same
    while (product1.id === product2.id
        || product2.id === product3.id
        || product1.id === product3.id

    ) {
        product2 = getRandomProduct(productsData);
        product3 = getRandomProduct(productsData);
    }

// render these 3 items on screen as aradio buttons with the same name and diff values and with image

    const radio1 = document.getElementById('product1');
    const radio2 = document.getElementById('product2');
    const radio3 = document.getElementById('product3');
    const radio1Span = document.getElementById('product1span');
    const radio2Span = document.getElementById('product2span');
    const radio3Span = document.getElementById('product3span');


    radio1.value = product1.id;
    radio2.value = product2.id;
    radio3.value = product3.id;
    radio1Span.textContent = product1.name;
    radio2Span.textContent = product2.name;
    radio3Span.textContent = product3.name;
};

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const selectedProductId = formData.get('product');

    totalVotes++;

    // whichever one they clicked on, see if they've voted for it before
    const productInVotesArray = findById(productVoteDetails, selectedProductId);

    if (productInVotesArray) {
        productInVotesArray.votes++;
    } else {
        // const newVoteObject = {
        //     id: selectedProductId,
        //     votes: 1,
        // };

        productVoteDetails.push({
            id: selectedProductId,
            votes: 1,
        });
    }

    document.querySelector('input[name="product"]:checked').checked = false;

    localStorage.setItem('__votes', JSON.stringify(productVoteDetails));
    // EVENT LISTENER
    // when they select a product, update the total votes
    // update the productVoteDetails
    // if theres coffee in the votes array, increment the votes for coffee in the array
    // if theres no coffee in the votes array, push some coffee into the array

    if (totalVotes >= 25) {
        window.location = 'results.html';
    }

    displayThreeProducts();
});

function reset() {
    initializeState();
}

function getRandomProduct(someProducts) {
    const randomIndex = Math.floor(Math.random() * someProducts.length);
    const randomProduct = productsData[randomIndex];
    
    return randomProduct;
}

displayThreeProducts();


// populate random images in image src
product1.src = randomProduct1.img;
product2.src = randomProduct2.img;
product3.src = randomProduct3.img;




// // import data - 21 product objects in an array
// import { productData } from './productData.js';
// import { ProductArray } from './productArray.js';

// const products = new ProductArray(productData);

// // get elements from DOM
// const productImage1 = document.getElementById('img1');
// const productImage2 = document.getElementById('img2');
// const productImage3 = document.getElementById('img3');
// const productInputs = document.querySelectorAll('input');
// const selectedInput = document.querySelector('input:checked');
// const submitSelectionButton = document.getElementById('submit-selection-button');

// // initialize state
// let numberOfSelections = 0;

// // change state
// submitSelectionButton.addEventListener('click', () => {
//     const selectedInput = document.querySelector('input:checked');
//     numberOfSelections++;

//     console.log(selectedInput.id);
//     console.log(numberOfSelections);
// });


// // setup random image generation 
// const randomProduct1 = products.getRandomProduct();
// let randomProduct2 = products.getRandomProduct();
// let randomProduct3 = products.getRandomProduct();

// while (randomProduct1 === randomProduct2) {
//     randomProduct2 = products.getRandomProduct();
// }

// while (randomProduct1 === randomProduct3) {
//     randomProduct3 = products.getRandomProduct();
// }

// while (randomProduct2 === randomProduct3) {
//     randomProduct3 = products.getRandomProduct();
// }

