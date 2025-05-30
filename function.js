//named function
var div_function = document.getElementById("functions");
function namedFunction(){
  let div_h1 = document.createElement("h1");
  div_h1.textContent="named Function";
  div_function.appendChild(div_h1);
}
namedFunction();

//function experssion
let functionExperession = function(){
    let div_h1 = document.createElement("h1");
    div_h1.textContent="Function Experssion";
    div_function.appendChild(div_h1);
}
functionExperession();

//arrow function
let arrow_function = ()=>{
    let div_h1 = document.createElement("h1");
    div_h1.textContent="arrow function";
    div_function.appendChild(div_h1);
}
arrow_function();


//IIFE  function as callback
(    function(div_function){
        let div_h1 = document.createElement("h1");
        div_h1.textContent="Immediately Invoked Function";
        div_function.appendChild(div_h1);
    }
)(div_function);

//anonymous function as callback

let arrayList = ['suresh', 'rajash', 'tamil']

arrayList.forEach(function(names){
    let div_h1 = document.createElement("h1");
        div_h1.textContent=names;
        div_function.appendChild(div_h1);
})


let names = ['suresh', 'dinesh', 'ramesh', 'tamil', 'subash']

//table want to print values
let basetable = document.getElementById("table");
let table = document.createElement("table");

let thead = document.createElement("thead")
let sno_th = document.createElement("th")
sno_th.textContent="serial Number";
let names_th = document.createElement("th")
names_th.textContent="names"
let tbody = document.createElement("tbody");

basetable.appendChild(table);
table.appendChild(thead);
thead.appendChild(sno_th);
thead.appendChild(names_th);
table.appendChild(tbody);

let count = 1;
names.map((printname)=>{
    console.log(printname);
    let tr = document.createElement("tr")
    let sno_td = document.createElement("td");
    sno_td.textContent=count;
    let name_td = document.createElement("td");
    name_td.textContent=printname;
    count++;
    tbody.appendChild(tr);
    tr.appendChild(sno_td);
    tr.appendChild(name_td);
})

