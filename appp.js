import products from './common/api.js';


// render these three items on the screen as radio buttons with the same name and different values
const radio1 = document.getElementById('product1');
const radio2 = document.getElementById('product2');
const radio3 = document.getElementById('product3');

const radio1Span = document.getElementById('product1span');
const radio2Span = document.getElementById('product2span');
const radio3Span = document.getElementById('product3span');

const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');

const desc1 = document.getElementById('desc1');
const desc2 = document.getElementById('desc2');
const desc3 = document.getElementById('desc3');
// not using this sloce   maybe for strech
const productsData = products.slice();

export function findById(items, id) {
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.id === id) {
            return item;
        }
    }
}

// keep track of how many times a user has voted, period (up to 25)
// keep track of votes for a given product
let totalVotes;
let productVoteDetails;


const initializeState = () => {
    totalVotes = 0;
    productVoteDetails = [];
};

initializeState();

// display three random NON-duplicated products
// display three NEW NON-duplicated poducts ***refresh products between votes***
const displayThreeProducts = () => {
    // GET three random products from our data
    const product1 = getRandomProduct(productsData);
    let product2 = getRandomProduct(productsData);
    let product3 = getRandomProduct(productsData);

    // make sure the products are unique/not the same
    while (product1.id === product2.id
        || product2.id === product3.id
        || product1.id === product3.id
    ) {
        product2 = getRandomProduct(productsData);
        product3 = getRandomProduct(productsData);
    }
    
    img1.src = product1.image;
    img2.src = product2.image;
    img3.src = product3.image;

    desc1.textContent = product1.desc;
    desc2.textContent = product2.desc;
    desc3.textContent = product3.desc;

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

    // document.querySelector('input[name="product"]:checked').checked = false;

    localStorage.setItem('votes', JSON.stringify(productVoteDetails));
    // EVENT LISTENER
    // when they select a product, update the total votes
    // update the productVoteDetails
    // if theres coffee in the votes array, increment the votes for coffee in the array
    // if theres no coffee in the votes array, push some coffee into the array

    if (totalVotes >= 25) {
        window.location = 'results.html';
        reset();
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

// reset the whole app when finished
    // set the votes array ([]) and total votes (0) to their initial states

// STRETCH keep track of how many times a product appears so we can build a percentage (times clicked / times shown)
// STRETCH: dont show the same product twice in a row
