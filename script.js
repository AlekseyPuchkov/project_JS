class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProducts();
    }

    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 1500 },
            { id: 2, title: 'Mouse', price: 50 },
            { id: 3, title: 'Keyboard', price: 350 },
            { id: 4, title: 'Gamepad', price: 250 },
        ];
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render())
        }
    }

    getSum() {
        let s = 0;

        for (let product of this.goods) {
            s += product.price;
        }
    }
}

class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
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
list.render();
list.getSum();

class Basket {
    addGood() {

    }

    removeGoods() {

    }

    changeGoods() {

    }

    render() {

    }
}

class ElemBasket {
    render() { }
}

