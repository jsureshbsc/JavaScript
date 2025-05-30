// Exercise -1
// ---------------------------
// var price=100;
// var product = "Mobile";
// var tax = 3;
// console.log(product);
// console.log(price+tax);


// Exercise -2
// -------------

// var fruitName ="Watermelon";
// var count = 10;
// var price =30;
// var total = count * price;

// console.log(fruitName +" total price is : "+ total);

//function 

// function sample(){
//     console.log("welcome to our world");
// }
// sample();

// function myName(){
//     console.log("suresh");
// }
// myName();


// Exercise -3
// ================

// let a =10;
// let b = 20;
// function add(a,b){
//     console.log(a+b);
// }
// add(a,b);

// Exercise -4
// =============

// let factor = "suresh";
// let fplayer = "dhoni";
// let fmovie ="Anbe Sivam";

// function favorite(factor, fmovie,fplayer){
//     console.log("Favourite Actor :"+ factor+'\n'+"Favourite Player :"+ fplayer+'\n'+"favourite movie : "+ fmovie);
// }
// favorite(factor,fmovie,fplayer);

// Exercise -5
// =================

// function area(length, breadth){
//     return length*breadth;
// }
// console.log(area(10,30));

// Exercise -6( if else statment)
// --------------------------------------

// let color = prompt("Enter the color code 1 = red, 2= green, 3 =yellow  ")
// console.log(color);
// let red =1;
// let yellow =3;
// let green = 2;
// function signal(color, red, yellow, green){
//     if(color ===red){
//         return "stop";
//     }else if(color===yellow){
//         return "get Ready";
//     }else if(color === green){
//         return "go";
//     }
// }
// console.log(signal(color, red, yellow, green))

//excercise -7 
// ===============

// let season = prompt("1. Spring\n2. summer\n3. autumn or fall\n4. winter");
// console.log(season);
// function seasons(season){
//     switch (season) {
//         case "1":
//         case "spring":
//              return " Enjoy the blooming flowers."
            
//         case "2":
//         case "summer":
//              return "Have fun in the sun."
            
//         case "3":
//         case "autumn":
//         case "fall":
//              return " admire the colorful leaves."
            
//         case "4":
//         case "winter":
//              return " bundle up and stay warm."
            
//         default:
//             return " invalid code"
            
//     }
// }

// console.log(seasons(season));

//multiplucation table 
// -----------------------

// let number = prompt("Which multiplication table want");

// function multiple(number){
//     for (let i = 1; i <= 10; i++) {
//         let mul = i* number;
//         console.log( i+"*"+number+"="+ mul);      
//     }
// }
// multiple(number)