				        JavaScript programming 
				        =======================
	
	Variables:
	----------------
		Variables are containers for string data or information.
		example:
		var a = 10;
		var b = 20;
		console.log(a+b); //30
	 javascript variables can be declared in 3 ways 
		1) var - var is global level access, it can be re-initialisation, re-declaration also allow
		2) let - block level access , it can be allowed to re-initialization but not for re-declaration.
		3) const - block level access, it can't allows to re-initialization and re-declaration
	
	DataTypes:
	--------------
		how to find the data types  " typeof(value) "
		
		two types
		
		primitive data types
		---------------------
		1) Number - it means whole number integers number fully
		2) String - it means within double quotes or single quotes 
		3) boolean - it means 'true' or 'false'
		4) null - it means empty
		5) undefined - it means not declared
		
	Functions:
	---------------
	
		It is a block of code designed to perform a particular task.
		function is executed when "something" invokes it.
		
		Syntax
		--------
			function<function name>(){
		
		parameters:
		-----------
			parameters typically refers to the variables or placeholders that you define when declaring a function
			these parameters serve as inputs to the function and allow you to pass data into the function when you call it .
		
		
		return type
		------------
		 return keyword is used within a function to specify the value that the function should produce as its result or return to the caller.
		 When a function is executed and encounters a return statement, it immediately stops executing and returns the specified value to calling code.
		 
	conditional Statements
	=========================
		if else:
		---------
			syntax 
				if(condition){
				//code 
				}else{
				//code
				}
				
	javascript DOM Manipulation
	----------------------------
	 DOM - Document Object Model
			
			  
  
  
DOM Manipulation:
	  It's a way for JavaScript to interact with and change HTML elements on a webpage.
	  The content of elements (text, images)
	  The style (color, size)
	  The structure (add/remove elements)
	
	
	document.getElementByID()
	----------------------------
		It is a method in the DOM that allows you to select a single element from the document using its unique ID attribute.
		IDs Should be unique within the document meaning that there should be only one element with a specific ID.
		If multiple elements have the same ID, this method will only select the first one it encounters.
	
	Event and Event Handlers
		An event in javascript is an action or occurrence that happens within a webpage, such as a user's interaction (clicking or button) or a page loading.
		An event handler in javascript is a function that responds to an event when it occurs. 
		it listens for specific events and executes code to perform actions based on those events, creating interactive and dynamic web applications.
		
		onchange() -- An html element has been changed
		onclick() -- The user clicks an HTML element
		onmouseover() -- the user moves the mouse over an HTML element
		onmouseout() -- the user moves the mouse away from an HTML element
		onkeydown() -- the user pushes a keyboard key
		onload() -- the browser has finished loading the page



Non Primitive data types

Object 
	 A collection of key-value pairs
	Syntax : let objectname{
			Key1 :keyvalue1,
			Key2:keyvalue2,
			.
			.
			keyfunction1:function(){},
			.
			.
		   }
Array
	array is a special type of object used to store multiple values in a single variable. The values are ordered and indexed starting from 0
Syntax:
	let  arrayname = [value1, value2 ….value-n];
	Example:
let fruits = ['apple','lemeon', 'orange', 'jack fruit', 'mango',]
Array methods
push()-  adds elements to end - example : 
pop() - removes last elements- example
shift() - removes first element - example
unshift() - adds elements to start - example
indexOf() - finds index of element - example
length() - returns number of elements - example
slice() - returns a portion of an array - example
splice() - adds/ removes elements at index  - example

Function - a function is a block of reusable code that performs a specific task
	Types of function
	1)  Named Function - A function with a name, defined using the function keyword.
	Syntax : function function_name(){
			//code
		  }
	2) function expression  -  a function assigned to a variable 
	Syntax :let  variable_name = function(){
					
				}
	3) Arrow function(ES6) - A shorter syntax for writing functions using the => arrow

	//()=>{}
	//()=>({})
		Syntax:  let variable_name = (parameters)=>{
				
			 }
		Arrow Function (modern syntax)
		syntax: 
		somefunction((parameteres)=>{

		});

	4) anonymous function as callback  - 
		Passed as an argument to another  function
		Common in async and array methods
			Syntax: 
				somefunction(function(parameters){
	
				});
 	5) IIFE(Immediately Invoked Function)
		Function runs immediately after it's defined
		Useful for creating private scope
		Syntax : 
			(function(parameters){
	
			})();
	6) Event listener with Anonymous function
		Syntax : 
			element.addEventLIstener(“event”, function(event){

			});

Event Handlers :
---------------
	1) Mouse Events
	-----------------
		onclick --> when element is clicked
		ondblclick --> when double- clicked
		onmousedown --> mouse button is pressed down
		onmouseup --> mouse button is released
		onmousemove --> mouse is moved
		onmouseover --> mouse enters the element
		onmouseout --> mouse leaves the element

	2) key events
	---------------
		okkeydown --> key is pressed
		onkeypress --> key is pressed
		onkeyup --> key is released	

	3) form events
	-------------------
		onsubmit --> form is sbmitted
		onreset --> form is reset
		onchange --> form input like select/text changed
		oninput --> value is being typed in inputfield
		onfocus --> element gets focus
		onblur --> element loses foces

	4) window & doucment Events
	-----------------------------
		onload --> page finishes loading
		onuload --> page is unloaded
		onresize --> window is resized
		onscroll --> page or element is scrolled
		onerror --> error occurs while loading
	
	5) Drag & drop events
	------------------------
		ondrag - element is being dragged
		ondragstart - drag start
		ondragend - drag end
		ondragover - drag is over a traget
		ondragenter - drag enter a valid target
		ondragleave - drag leaves a valid target
		ondrop - element is dropped


date
REgExp
Map
Set
Weakmap
weakSet

