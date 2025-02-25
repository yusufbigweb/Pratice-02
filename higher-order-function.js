// const username = [56]
// username.push(63, 20)

// const useingMap = username.map(function(x){
//     return x * 10;
// })

// console.log(useingMap)




// var x = 1;

// function a(){
//     var x = 10;
//     console.log(x)
// }

// function b(){
//     var x = 10;
//     console.log(x)
// }


// a();
// b();

// console.log(x)



// const a = 100;

// function ad(){
//     var b = 100000;
//     console.log(b)
// }
// // ad()
// console.log(ad())


// function a(){
//     function c(){
//         console.log(b)
//     }

//     c()
// }

// var b = 10;
// a();


// b(); 
// console.log(a)

// const  a = 10;

// function b(){
//     var b = 100;
//     console.log(b)
// }


// var a = 1;
// b();
// c();



// function b(){
//     var b = 10;
//     console.log(b)
// }


// function c(){
//     var c = 100;
//     console.log(c)
// }

// // output =  100 100 1

// console.log(a)



/*


-> let and const are hoisted. we cant use them before initialization is result of "temporal dead zone".

-> js use diff memory than global execution context to store let and cost. which is reason behind "temporal dead zone"

-> level of strictness ... var<<let<<const.

-> var //no temporal dead zone, can redeclare and re-initialize, stored in GES
    let //use TDZ, can't re-declare, can re-initialize, stored in separate memory
    const //use TDZ, can't re-declare, can't re-initialize, stored in separate memory

-> syntax error is similar to compile error. while type and reference error falls under run time error.

-> syntax error ... violation of JS syntax
    type error ...  while trying to re-initialize const variable
    reference error ... while trying to access variable which is not there in global memory.

*/