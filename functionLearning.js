//()=>{}
//()=>({})

//     let input1 = document.getElementById("num1");
//     let input2 = document.getElementById("num2");
//     let result = document.getElementById("result");

        
    

//    let click1= (()=>{
//     num1 = Number(input1.value);
//        num2 = Number(input2.value);
//         result.textContent=`Addition is : ${num1+num2}`;
//         console.log(num1+num2);
        
//     })

//task
//want to generate a random number


let enteredNumber = document.getElementById("enternumber");
var result1 = document.getElementById("correctornot");
let score1 = document.getElementById("score")
let score =(count)=>{
    if(count<=0){
    score1.textContent=`your score is :${count} game over`
    document.getElementById("enternumber").outerHTML="";
    document.getElementById("btn").outerHTML="<h1>sorry game over</h1>";
   }else{
    score1.textContent=`your score is : ${count}`;

   }
}
let count =10;
let check =()=>{
    let randomnumber = Math.floor(Math.random()*10+1)
console.log(randomnumber);
    if(randomnumber == enteredNumber.value){
     result1.textContent="you are Success!";
     console.log("you are Success!")
     count++;
   }else{
    result1.textContent="you are worng";
    console.log("you are worng");
    count--;
   }
   score(count)
}
check();
