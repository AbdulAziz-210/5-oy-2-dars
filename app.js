

// // 1-masala









// // 2-masala

// let greeting;
// greetign = {}; //Typo !
// console.log(greetign);

// // A variant {}




// // 3-masala

// let c = {greeting: "Hey"};
// let d;

// d = c;
// c.greeting = "Hello";
// console.log(d.greeting);

// // A variant: Hello

// Chunki 'D' ni 'C' ga tenglashtirdik, Keyin  c ga tenglashtirgan "greeting" ni qiymatini "Hello" ga o'zgartirdik.
// Console ga 'D' dagi greeting ni chaqirganimizda "Hello" chiqdi.




// // 4-masala

// const bird = {
//     size: 'small'
// };

// const mouse = {
//     name: 'Mickey',
//     small: true,
// };
// console.log(bird);
// console.log(mouse);





// // 5-masala

// const shape = {
//     radius: 10,
//     diametr() {
//         return this.radius * 2;
//     },
//     perimetr: () => Math.PI * this.radius,
// };

// console.log(shape.diametr());
// console.log(shape.perimetr());

// // B variant: 20 and NaN





// // 6-masala

// const obj = {a: 'one', b: 'two', a: 'three'};
// console.log(obj);

// B variant: { a: "three", b: "two" }

// // a ni qiymati oxirgi berilgan qiymatni oladi




// // 7-masala

// const a = {};
// const b = {key: 'b'}; 
// const c = {key: 'c'};

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);

// // B: 456 




// // 8-masala

// const person = {
//     name: 'Lydia',
//     age: 21,
// }
// for (const item in person) {
//     console.log(item);
// }

// // B variant "name, "age




// // 9-masala

// let person = {name: "Lydia"};
// const members = [person];
// person = null;

// console.log(members);

// // D variant: [ { name: 'Lydia' } ]




// // 10-masala

// const numbers = [1, 2, 3];
// numbers [10] = 11;
// console.log(numbers);

// // C variant : [ 1, 2, 3, <7 empty items>, 11 ]