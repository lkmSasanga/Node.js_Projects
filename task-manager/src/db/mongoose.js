const mongoose = require('mongoose')
// const validator = require('validator')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

// const me = new User({
//     name: '  Mike',
//     email: 'MIKE@MEAD.IO   ',
//     password: 'phone098!'
// })
//
// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log(error)
// })




// const task = new Task({
//     description: '       Learn mongoose library2',
//     // completed: false,
// })
//
// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log(error)
// })
