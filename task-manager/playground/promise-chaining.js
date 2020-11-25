require('../src/db/mongoose')
const User = require('../src/models/user')

//5fb8dd1854316a57d02771b8

// User.findByIdAndUpdate('5fb8e44b48be332fbc3cc8c3', {age: 1}).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user =  await User.findByIdAndUpdate(id, { age })
    const count = await  User.countDocuments({ age })
    return count
}

updateAgeAndCount('5fb8e44b48be332fbc3cc8c3', 23).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
























