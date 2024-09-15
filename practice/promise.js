/*
    ____ comment in here ____
*/

// var promise = new Promise (
//     function(resolve, reject) {
//         //logic
//         // success => call resolve
//         // fail : reject();

//         resolve(
//             {
//                 "id": 1,
//                 "name": "tesst1"
//             }
//         );
//         reject();
//     }
// )

/* _______________ Chain _______________*/

// promise
//     .then(function(data){
//         console.log(data);
//     })f
//     .then(function (data) {
//         console.log(data);
//     })
//     .catch(function(){
//         console.log("Failure !");
//     })
//     .finally(function(){


//         console.log("Done !");
//     })

/*
promise
    .then(function(data){
        * If don't return a Promise it will execute the then method currently
        * if it will return a Promise, the Then method will waiting the Promise have sloved
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function(){
        console.log("Failure !");
    })
    .finally(function(){
        console.log("Done !");
    })

    */

// function sleep(ms) {
//     return new Promise(function (){
//         setTimeout(resolve, ms);
//     });
// }

// sleep(1000)
//     .then(function() {
//         console.log(1);
//     })

// var pomide = new Promise(function(resolve, reject) {
//     resolve('Success !');
// });


// pomide
// .then(function (data) {
//     console.log(data);
// })
// .catch(function (data) {
//     console.log(data);
// })

// var promisee = new Promise.resolve('data');

var pro1 = new Promise(
    function(resolve) {
        setTimeout(function(){
            resolve([2,3]);
        }, 1000);
    }
);

var pro2 = new Promise(
    function(resolve) {
        setTimeout(function(){
            resolve([5,6]);
        }, 2000);
    }
);


var test = Promise.all([pro1, pro2])

test
    .then( function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log(error);
    })