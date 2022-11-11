

export function getAllProductCategories() {
    return fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .catch(error => {
            return error;
        });
}

export function getFeaturedProducts() {
    return fetch('https://fakestoreapi.com/products?limit=5')
        .then(res => res.json())
        .catch(error => {
            return error;
        });
}

export function getCategoryProducts(category=null) {
    return fetch(`https://fakestoreapi.com/products${category ? `/category/${category}` : ''}`)
        .then(res => res.json())
        .catch(error => {
            return error;
        });
}

export function getProduct(product) {
    return fetch(`https://fakestoreapi.com/products/${product}`)
        .then(res => res.json())
        .catch(error => {
            return error;
        });
}

export function getAllCartProducts() {
    return fetch('https://fakestoreapi.com/carts/1')
        .then(res=>res.json())
        .catch(error => {
            return error;
        });
}