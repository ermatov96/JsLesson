"use strict";

// let car={
//     model:'Toyoto',
//     make:'Estima',
//     year:2016,
//     price:50000
// }
// function showp(obj){
//     for(let key in obj){
//         if(typeof obj[key]==='string')
//         console.log(key,obj[key]);
//     }
// }
// showp(car)
//0-50  F
//51-60 D
//61-70C
//71-80 B
//81-100 A
// const marks = [81, 86, 74, 59, 77]
//    console.log( calculateGrade(marks));
// function calculateGrade(marks) {
//     let avrg = calculateAvarage(marks);
//     if (avrg < 50) return 'F';
//     if (51 < avrg < 60) return 'D';
//     if (61 < avrg < 70) return 'C';
//     if (71 < avrg < 80) return 'B';
//     return 'A';
// }
// function calculateAvarage(array) {
//     let sum = 0;
//     for (let value of marks)
//         sum += value;
//     let avrg = sum / marks.length;
//     return avrg;
// }
// ShowPrimeNumbers(49);
// function ShowPrimeNumbers(limit){
//     isPrime(limit)
//     for (let number =2; number<=limit;  number++){
//         if(isPrime(number)) console.log(number);}
//     }
// function isPrime(number){
//     let isPrime=true;
//     for (let factor =2; factor<number;  factor++)
//         if(number%factor===0)
//         return false; 
//          return true;
// }
//  return i;
//   function createCircle(radius){
// //   return {
// //     radius,
// //     draw(){
// //       console.log('doira');
// //       console.log(yuza);
// //     }
// //   }; 
// // }
// // // constructor function
// // function Circle(radius){
// //   this.radius=radius;
// //   this.draw=function(){
// //     console.log('doira');
// //   }
// // }
// // const circle=new Circle(1);
// // circle.color='green';
// // circle.yuza=function(){
// //   const yuz =circle.radius*3.14;
// //   console.log(yuz);
// // }
// // circle.yuza();
// // console.log(circle);
// // const circle1=createCircle(1);
// // const circle2=new Circle(1);
// // console.log(circle1.constructor);
// // console.log(circle2.constructor);
// //  function Circle(radius){
// //   this.radius=radius;
// //    this.draw=function(){
// //     console.log('doira');
// //    }
// //    console.log(radius);
// //   }
// // Circle.call({},5);
// // const circle2=new Circle(5);
// // Circle.apply({},[5]);
// // git
// const circle={
//   radius:1,
//   draw(){
//     console.log('doira');
//   }
// };
//   // const clone ={};
//   // for(let key in circle)
//   // clone[key]=circle[key];
//   //const clone =Object.assign({color:'white'},circle);
// const clone ={... circle};
//   console.log(clone);
// let greeting =' assalomu alaykum ';
// let greeting2= new String();
//  console.log(greeting.trim()); 
//  let text='salomlashishlik uchun \n   \'Assalomu alaykum \'   deb aytasiz ';
//  let words=text.split(' ');
//  console.log(words);
//  let text2= ` this is my
//   'first' message
//  `;
//  console.log(text2);
// console.log(greeting[1]);
// console.log(greeting.includes('va'));
// console.log(greeting.startsWith('assalom'));
// console.log(greeting.indexOf('kum'));  
// let greeting3=greeting.replace('salom','salam');
// console.log(greeting.toUpperCase());
// console.log(greeting3.toLowerCase());
// let mackbook={
//    model: 'Apple M1 chip with 8‑core CPU, 8‑core GPU, and 16‑core Neural Engine',
//  RAM:'8GB unified memory',
// storage:'512GB SSD storage',
// display:'Retina display with True Tone',
// Keyboard:'Backlit Magic Keyboard - US English',
// Ports:'Two Thunderbolt / USB 4 ports',
// brand:'Apple',
//        price:50000,
//  poweron:function(){
//    console.log('on');
//  }} 
//  console.log(mackbook);
// let mackbook={
//      model: 'Apple M1 chip with 8‑core CPU, 8‑core GPU, and 16‑core Neural Engine',
//    RAM:'8GB unified memory',
//   storage:'512GB SSD storage',
//   display:'Retina display with True Tone',
//    Keyboard:'Backlit Magic Keyboard - US English',
//    Ports:'Two Thunderbolt / USB 4 ports',
//   brand:'Apple',
//   price:50000,
// getFullInfo(){
// return this.brand;
// }
// }
// console.log(mackbook.getFullInfo());
// // Constructor orqali yaratish
// function laptop (model, RAM, Storage, Display, Brand ){
//   this.model=model,
//   this.RAM=RAM,
//   this.Storage=Storage,
//   this.Display=Display,
//   this.Brand=Brand,
//   this.poweron=function(){
//     console.log('on');
//   }
// }
// let Laptop=new laptop('Apple M1 chip with 8‑core CPU, 8‑core GPU, and 16‑core Neural Engine', '8GB unified memory','512GB SSD storage','Retina display with True Tone','Apple')
// console.log(Laptop);
//To'plamlar!
// let numbers=[3,4,1];
// numbers.push(5,6);
// numbers.unshift(1);
// numbers.splice(1,0,2);
// console.log(numbers.lastIndexOf(1));
// console.log(m=numbers);
// console.log(numbers.includes(7));
// console.time('response in');
// //alert('Click to continue');
// console.timeEnd('response in');
// console.log('%cHello world!', 'color: blue; font-size: xx-large');
// let first=[1 , 2 , 3];
// let second =[4,5,6];
// let combined=[...first,...second];
// for(let item of combined)
// console.log(item);
//.combined.forEach((item,index)=> console.log(item, index))
//let conbined=first.concat(second);
// first.id=7;
// console.log(first);
//console.log(combined);
// let sliced=conbined.slice(2); 
// console.log(sliced);
// let numbers =[1, 5 ,4 ,6 ,2 ,7,3]
// numbers.sort( );
// console.log(numbers);
// numbers.reverse();
// console.log(numbers);
// let courses=[
//   {id:1, title: "Redux"},
//   {id:2, title: "Node.js"},
//   {id:3, title: 'aSP.net Core'}
// ]
// courses.sort((first,second)=>{
//   if(first.title<second.title) return -1;
//     if(first.title>second.title) return 1;
//     else return 0;}
// );
// console.log(courses);
// courses.sort(function(first,second){
//   let titleFirst=first.title.toLowerCase();
//   let titleSecond=second.title.toLowerCase();
//   if(titleFirst<titleSecond) return -1;
//     if(titleFirst>titleSecond) return 1;
//     else return 0;
// });
// console.log(courses);
//  let numbers =[2 , 3, -5 ,1 ,-4]
//  let items=numbers
//                   .filter(number =>  number>=0 )
//                   .map(numbers =>{
//                     return obj={value:numbers}
// })
//                   .filter(obj=>obj.value>1);
// console.log(items) ;
// let numbers =[ 7, 2 ,3 , 8]
// let sum=0;
// for(let number of numbers)
// sum+=number;
// let sum=numbers.reduce((accumulator, valuCurrent)=> accumulator+valuCurrent, 0);
// console.log(sum);
// let numbers =arrayFromrange(-5, 5);
// console.log(numbers);
// function arrayFromrange(min, max){
//   let result=[];
//   for (var i = min; i <= max; i++) 
// if(min>max){return -1}
// else
//  result.push(i);
//  return result;
//   //TO_DO
// }
//  let numbers =[ 7, 2 ,3 , 8]
//  let exist =includes(numbers, 5);
//  console.log(exist) ;
//  function includes(array,elementf){
//   for(let element of array)
//     if(element===elementf)
//    return true;
//    return false;
//  }
// let numbers =[1, 2, 3, 4]
// let output=move(numbers,0,1);
// console.log(output);
// function move(array,index, offset){
// let result =[... array];
//  let element=result.splice(index,1, )[0];
//   result.splice(index+offset,0,element);
// return result;
//TO-DO
//}
// let numbers=[9, 2 , 3, 40 ,5];
// let maxNumber=getMaxNumber(numbers);
// console.log(maxNumber);
// function getMaxNumber(array){
//   if(array.length===0)
//     return undefined;
//     array.reduce((acc,cur) =>{
//       if(cur>acc) return cur;
//       return acc;
//     });
// let maxNumber= array[0];
// for(let i=1; i<array.length; i++)
// if(array[i]>maxNumber)
// maxNumber=array[i];
// return maxNumber;
//to_do
//   const books=[
//   {title:'clean code', year:2008, rating:8.2},
//   {title:'Code complate, 2nd edition', year:1993, rating:9.3}, 
//   {title:'Design  Patterns', year:1994, rating:7.1},
//   {title:'Soft Skills', year:2014, rating:8.2},
//   {title:'Refactoring 2nd edition', year:2018, rating:9.7},
//   {title:'The progmatic Programmer', year:1994, rating:8.4},
//   {title:'Introduction to Algorithms, 3rd edition', year:2009, rating:7.7},
//   {title:'Working effectively with legacy code', year:2004, rating:6.9}
// ];
// let titles =books
// .filter(b=>b.year>2010&&b.rating>8)
// .sort((a,b)=>a.rating-b.rating)
// .map(b=>b.title) ;
// console.log(titles);
// let pilots = [
//   {
//     id: 10,
//     name: "Poe Dameron",
//     years: 14,
//   },
//   {
//     id: 2,
//     name: "Temmin 'Snap' Wexley",
//     years: 30,
//   },
//   {
//     id: 41,
//     name: "Tallissan Lintra",
//     years: 16,
//   },
//   {
//     id: 99,
//     name: "Ello Asty",
//     years: 22,
//   }
// ];
//  var totaleyears=pilots.reduce((acc,pilot)=>(acc.years||0)>pilot.years? acc:pilot,{} );
//  console.log(totaleyears);
//  var totaleyears = pilots.reduce(function (oldest, pilot) {
//    return (oldest.years || 0) > pilot.years ? oldest : pilot;
//  }, {});
//  console.log(totaleyears);
// var personnel = [
//   {
//     id: 5,
//     name: "Luke Skywalker",
//     pilotingScore: 98,
//     shootingScore: 56,
//     isForceUser: true, 
//   },
//   {
//     id: 82,
//     name: "Sabine Wren",
//     pilotingScore: 73,
//     shootingScore: 99,
//     isForceUser: false,
//   },
//   {
//     id: 22,
//     name: "Zeb Orellios",
//     pilotingScore: 20,
//     shootingScore: 59,
//     isForceUser: false,
//   },
//   {
//     id: 15,
//     name: "Ezra Bridger",
//     pilotingScore: 43,
//     shootingScore: 67,
//     isForceUser: true,
//   },
//   {
//     id: 11,
//     name: "Caleb Dume",
//     pilotingScore: 71,
//     shootingScore: 85,
//     isForceUser: true,
//   },
// ];
// var jedipersonal=personnel.filter(person=>person.isForceUser);
// console.log(jedipersonal);
// var jedscores=jedipersonal.map(jedi=>jedi.pilotingScore+jedi.shootingScore)
// console.log(jedscores);
// var totaljedscore=jedscores.reduce((acc,score)=>acc+score ,0);
// console.log(totaljedscore);
// var TotaleJedScore=personnel
// .filter(person=>person.isForceUser)
// .map(jedi=>jedi.pilotingScore+jedi.shootingScore)
// .reduce((acc,score)=>acc+score ,0);
// console.log(TotaleJedScore);
// const totalJediScore = personnel.reduce((acc, person) => person.isForceUser ? acc + person.pilotingScore + person.shootingScore : acc, 0);
//FUNCTION DECLARATION 
// function read(){
//   console.log('read');
// }
// // Named function expression
// let write =function write(){
//   console.log('yoz');
// };
// let arr=[1, 2 , 5 , 7 , 3 ,10]
// function minMax(arr) {
// 	for(let i=0; i<arr.length; i++)
// 		for(let j=0; j<arr.length; j++)
// 			if(arr[i]>arr[j])
// 				return arr[i];
// }
// console.log(arr);
// let person ={
//   firstName: 'Abdulla',
//   lastName: 'Qodiriy',
//   get fullName(){
//     return this.firstName+ '  '+ this.lastName ;
//   },
//  set fullName(value){
//    if (typeof value !=='string') 
//    throw new Error('value string emas');
//    let fullNameArray=value.split(' ');
//    if(fullNameArray.length !==2)
//    throw new Error('Ismi Sharifingizni kiriting');
//    this.firstName=fullNameArray[0];
//    this.lastName=fullNameArray[1];
//  }
// }
// try {
// person.fullName=' ';  //'alisher navoiy';
// }
// catch(e){
//   console.log(e);
// }
// console.log(person);
function Game(title) {
  this.title = title;
  console.log(this);
}

var roblox = new Game('rolbox');
console.log('Alhamdulillah');