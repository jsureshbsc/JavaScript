let print_name = prompt("Enter your name");

function user(print_name){

    return print_name;
}

let print1 = document.getElementById("name");
console.log("hello" + user(print_name));
print1.textContent='';
print1.textContent="hello" +user(print_name);
