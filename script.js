const products = [
    { id: 1, title: 'Notebook', price: 150 },
    { id: 2, title: 'Mouse', price: 50 },
    { id: 3, title: 'Keyboard', price: 350 },
    { id: 4, title: 'Gamepad', price: 250 },
];

const renderProduct = (product, img = 'https://via.placeholder.com/200x150') => {
    return `<div class="product-item">
                <img src="${img}">
                <h3>${product.title}</h3>
                <p>${product.price}</p>
                <button class="buy-bth">Купить</button>
                </div>`
};

const renderPage = list => {
    document.querySelector('.products').innerHTML =
        (list.map(product => renderProduct(product))).join('');
};

renderPage(products);



