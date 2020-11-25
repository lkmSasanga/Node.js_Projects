// CRUD 

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

//destruring above lines
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
    // console.log(id.id.length)
    // console.log(id.toHexString().length)
    // console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect database!')
    }
    // console.log('Connected Correctly!')

    const db = client.db(databaseName)

    //insertOne is Asynchronous
    //inserOne is inserts single document into collection
    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Vikram',
    //     age: 26
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     //ops is array of documents
    //     console.log(result.ops)
    // })


    // db.collection('users').insertMany([{
    //     name: 'Jen',
    //     age: 24
    // }, {
    //     name: 'Bhagi',
    //     age: 23
    // }], (error, result) => {
    //     if (error) {
    //         return conolse.log('Unable to insert documents!')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([{
    //     description: 'Machine learning',
    //     completed: true
    // }, {
    //     description: 'Maths',
    //     completed: false
    // }, {
    //     description: 'IOT',
    //     completed: false
    // }], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert insert Documents!')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').findOne({ _id: new ObjectID('5fb7e9a375cf614f2422c701') }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({ age: 23 }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({ age: 23 }).count((error, count) => {
    //     console.log(count)
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID('5fb7c7e0e15692392856d6f7') }, (error, task) => {
    //     if (error) {
    //         return console.log('Unable to fetch!')
    //     }
    //     console.log(task)
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, tasksIncomplete) => {
    //     console.log(tasksIncomplete)
    // })

    //update
    // db.collection('users').updateOne({
    //     _id: new ObjectID('5fb7c01c09b7d014ccf4461b')
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })


    //update many in tasks
    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })


    //delete
    // db.collection('users').deleteMany({
    //     age: 24
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({
        description: 'Maths'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

})