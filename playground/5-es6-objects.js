const name = 'Malindu'
const userAge = 23

const user = {
    name, //shorthand
    age: userAge,
    location: 'Galle'
}

console.log(user)


//destructuring

const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const label = product.label
// const stock = product.stock

// const {label: productLabel, stock, rating = 5} = product

// console.log(productLabel)
// console.log(stock)
// console.log(rating)


const transaction = (type, { label, stock = 0 } = {}) => {
    console.log(type, label, stock)
}

transaction('order')

transaction('order', product)