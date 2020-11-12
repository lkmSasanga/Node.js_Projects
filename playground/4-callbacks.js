// setTimeout(() => {
//     console.log('Two seconds are up') //calback function
// }, 2000)

// const names = ['Node', 'js', 'Android']
// const shortNames = names.filter((name) => {
//     return name.length <= 4
// })

// const geoCode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
//         // return data
//         callback(data)
//     }, 2000)
// }

// // const data = geoCode('Philadelphia')
// // console.log(data)

// geoCode('Philadelphia', (data) => {
//     console.log(data)
// })

const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log('Sum is : ' + sum)
})

