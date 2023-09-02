// 

// // db.version(1).stores({
// //     people:`id, name, age`
// // })

// // db.people.bulkPut([
// //     { id: 1, name: "Josephine", age: 21 },
// //     { id: 2, name: "Per", age: 75 },
// //     { id: 3, name: "Simon", age: 5 },
// //     { id: 4, name: "Sara", age: 50, notIndexedProperty: 'foo' }
// // ]).then(() => {
// //     return db.people.where("age").between(0, 25).toArray()
// // }).then( people => {
// //     console.log(`Found people: ${people.map(person => person.name)}`)
// // })

// db.version(1).stores({
//     urls: 'id, longUrl, shortUrl'
// })

const initiateDatabase = (name, collection, args) => {
    var db = new Dexie(name)
    db.version(1).stores({
        collection: `${[...args]}`
    })

    return db
}

console.log(initiateDatabase('linkDb', 'urls', ['id', 'shortUrl', 'longUrl']));

const addDocsToDatabase = (docs) => {
    
}


const link = document.getElementById('link')
const submitBtn = document.getElementById('submit-btn')

const getLink = () => {
    return new URL(link.value).href;
}

const randomString = (length) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let result = ""
    for(i=0; i < length; i++) result += chars.charAt(Math.floor(Math.random() * chars.length));
    return result
}

// console.log(randomString(10));

const makeAShortLink = () => {
    return new URL(`https://drt.rom/${randomString(10)}`).href
}

// const redirectOptions = {
//     method: ''
// }

// const storeLink = () => {

// }

// console.log(makeAShortLink().href)

submitBtn.addEventListener('click', () => console.log(getLink()))

