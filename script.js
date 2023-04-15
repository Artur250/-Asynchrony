// 1
// function delay(num){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() =>{
//             resolve(num + 10)
//         },3000)
//     })
// }
// delay(5).then(result => {
//     console.log(result);
// })


// 2

// function delay(num1,num2) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() =>{
//             resolve(num1 + num2)
//         },5000)
//     })
// }
// delay(200,234).then(result =>{
//     console.log(result);
// })

// 3

// let numbers = [-2, 5, 1, 3, 10];

// function takesArr(numbers) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const min = Math.min(...numbers);
//         resolve(min);
//       }, 2000);
//     });
//   }
  
//   takesArr(numbers)
//     .then(min => console.log(`Наименьшее число: ${min}`))
    

// 4


// function sumNum(num, num1) {
//     console.log( num + num1 );
//   }
  
//   setTimeout(sumNum, 3000, 10, 5);



// 5 