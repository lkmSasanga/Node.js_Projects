// const square = function (x) {
//     return x * x
// }

// const square = (x) => {
//     return x *x
// }

// const square = (x) => x *x

// console.log(square(3))

const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Bob', 'Rob'],
    printGuestList () { 
        // const that = this
        console.log('Guest list for ' + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}
// if we use arrow function here it is not support to this.name
// this keyword binding is not working

event.printGuestList()