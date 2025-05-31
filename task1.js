//task-1
 let inputbox = document.getElementById("inputbox");
inputbox.addEventListener("keypress",()=>{
    let printtext = document.getElementById("printtext");
    printtext.textContent=inputbox.value;
})

// task-2
let btn = document.getElementById("btn");
 
let task2 = document.getElementById("task2")
let restsetbtn = document.createElement("button")
    restsetbtn.innerText="reset";
task2.appendChild(restsetbtn)
 let count=1;
  btn.addEventListener("click",()=>{
   var addvalue = document.createElement("p");
    btn.innerText=`total times added${count}`;
    addvalue.textContent="add"
    task2.appendChild(addvalue);
    count++
  })

  restsetbtn.addEventListener("click",function(e){
     btn.innerText=`total times added${count}`
        addvalue.remove();
        count--;
  })

//task 3 

let changecolor = document.getElementById("changecolor");
changecolor.addEventListener("click",()=>{
    changecolor.innerText="changed";
    changecolor.style.background="red";
})