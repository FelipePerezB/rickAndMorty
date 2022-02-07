const somethingWillHappen = () => new Promise((resolve,reject) =>   (false) ? resolve("Hey") : reject(new Error("Whoops!")))
//     if (true){
//         resolve("Hey!")
//     } else {
//         reject("Whoops!")
//     }
// })

// const somethingWillHappen3 = () => new Promise((resolve,reject) => {
//     if (true){
//         resolve("Hey!")
//     } else {
//         reject("Whoops!")
//     }
// })

somethingWillHappen()
    .then(response=> console.log(response))
    .catch(err=> console.log(err))

const somethingWillHappen2 = () => new Promise((resolve,reject) => {
    if (false){
        setTimeout(()=> {
            resolve("True")},2000)

    } else {
        const error = new Error("Whoops!")
        reject(error)
    }
})

// somethingWillHappen()
//     .then(response=> console.log(response))
//     .catch(err=> console.error(err))

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response=> console.log("Array of results", response))
    .catch(err=>console.log(err))