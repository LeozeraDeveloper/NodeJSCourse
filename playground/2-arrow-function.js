const log = console.log;

// const square = function (x) {
//     return x * x
// }

// const square = (x) =>{
//     return x * x
// }

// const square = (x) => x * x

// log(square(2))

const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike', 'Leo'],
    printGuestList() {
        log('Guest list for ' + this.name)

        this.guestList.forEach((guest) => {
            log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()