require('../src/db/mongoose')
const Task = require('../src/models/task')

//5fb8dd1854316a57d02771b8

// Task.findByIdAndDelete('5fb8e6c2a2ee202e30c059ac').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })


const deleteTaskAndCount = async (id) => {
    const task =  await Task.findByIdAndDelete(id)
    const count = await  Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5fb8e6f1c0100e42d8436429', false).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})



























