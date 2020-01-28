<!-- API WILL HAVE ALL PRODUCT DATA -->
Enter data of products [id , image, name] into 'api.js'

<!-- APPS.JS WILL HAVE FUNCTIONS -->
SLICE and clone the orginal array list
apps.js will have functions for radio images eventlistener
randomizer to select 3 random products (get 3 random and return 3 random)

<!-- PRODUCTARRAY WILL HAVE CLASS AND GET PRODCUTS BY ID -->
export class ProductsArray {
    constructor(products)
    this.products = products.slice();

    getProduct() {
        return this.products;
    }
}

<!-- REMOVE PRODUCT FROM ARRAY -->
removeProductById(Someid) {
    this.product.forEach((product, i) => {
            this.products.splice(i, 1);
        }
    });
}
Work on htlm Make sure functions work
