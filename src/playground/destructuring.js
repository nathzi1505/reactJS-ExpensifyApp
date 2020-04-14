// const person = {
//     name: 'Pritthijit Nath',
//     age: 19,
//     location: {
//         city: 'Kolkata, West Bengal, India',
//         temp: 37
//     }
// }

// const { name: firstName = 'Andrew', age } = person 
// const { city, temp: temperature } = person.location

// if (city && temperature)
//     console.log(`It is ${temperature} degrees in ${city}`)

// console.log(`${firstName} is ${age}`)

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name:publisherName = "Self-Published" } = book.publisher
// console.log(publisherName)

// const address = []
// const [, , state = "New York"] = address
// console.log(`You are in , ${state}.`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']
const [itemName,, mediumPrice] = item
console.log(`A medium ${itemName} costs ${mediumPrice}`)