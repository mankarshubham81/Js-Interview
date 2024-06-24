// Qusetion:  Implement promise.all 

function showText(text, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, time);
    })
}

function showText2(text, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, time);
    })
}

function myPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        let results = [];
        let count = 0;

        for (let i = 0; i < promises.length; i++) {
            promises[i]
                .then(value => {
                    results[i] = value;
                    count++;
                    if (count === promises.length) {
                        resolve(results);
                    }
                })
                .catch(error => {
                    reject(error);
                });
        }
    });
}

myPromiseAll([showText2("hey", 3000), showText("hello", 3000), Promise.resolve("hi")]).then((res) => {
    // myPromiseAll([showText2("hey", 1000), showText("hello", 3000), Promise.resolve("hi"), Promise.reject("rejected10"), Promise.reject("rejected2")]).then((res) => {
    console.log(res);
})
.catch(err => {
    console.log(err);
}) 

// Promise.all([showText2("hey", 1000), showText("hello", 3000), Promise.resolve("hi")]).then((res) => {
//     // Promise.all([showText2("hey", 1000), showText("hello", 3000), Promise.resolve("hi"), Promise.reject("rejected10"), Promise.reject("rejected2")]).then((res) => {
//     console.log(res);
// })
// .catch(err => {
//     console.log(err);
// })   