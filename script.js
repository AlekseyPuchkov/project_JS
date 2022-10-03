const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._getProducts()
            .then(data => {
                this.goods = [...data];
                this.render()
            });
    }

    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }

    calcSum() {
        return this.goods.reduce((accum, item) => accum += item.price, 0);
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render())
        }
    }
}

class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }

    render() {
        return ` <div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductList();


class Basket {
    constructor(container = '.cart-block') {
        this.container = container;
        this.goods = [];

        this._clickBasket();
        this._getBasketItem()
            .then(data => {
                this.goods = data.contents;
                this.render();
            });
    }

    _getBasketItem() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new BasketItem();

            block.insertAdjacentHTML('beforeend', productObj.render(product));
        }
    }

    _clickBasket() {
        document.querySelector('.btn-cart').addEventListener('click', () => {
            document.querySelector(this.container).classList.toggle('invisible');
        });
    }

}

class BasketItem {
    render(product, img = 'https://via.placeholder.com/50x50') {
        return `<div class="cart-item" data-id="${product.id_product}">
                <div class="product-bio">
                <img src="${img}" alt="Some image">
                <div class="product-desk">
                <p class="product-title">${product.product_name}</p>
                <p class="product-quantity">Quantity: ${product.quantity}</p>
                <p class="product-single-price">${product.price} each</p>
                </div>
                </div>
                <div class="rignt-block">
                <p class="product-price">${product.quantity * product.price}$</p>
                <button class="del-btn" data-id="${product.id_product}">X</button>
                </div>
                </div>`
    }
}

new Basket();
