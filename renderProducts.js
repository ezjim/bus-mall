import products from "./common/api";

const img = document.createElement('img');
img.src = '../assets/' + products.image;
img.alt = product.name + 'image';