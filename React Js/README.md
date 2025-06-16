                                React Js
                          --------------------

## Introduction:

--> React.js is a powerful JavaScript library for building interactive user interfaces in a highly efficient way.
--> Developed by Meta(Faceboook) React Helps create dynamic applications with reusable components.
-->popular & widely used for modern web applications.

============================Basic====================

## React Components:

--> Components are the building blocks of a React Appliction.
--> They encapsulate UI and logic into reusable and independent pieces.

### Types of components

1.  Class Components:
    --> it is legacy
    --> use a constructor and lifecycle methods to handle state
    --> Rarely used in new React apps

    ### structure:

         class ClassName extends React.Component {
             render() {
                 return(
                    <>
                     .........
                    </>
                 )
             }
         }

2.  Functional Components:
    --> simple and recommended for most cases
    --> use React Hooks(useState, useEffect) for state management.

    ### structure:

        function FunctionName(){
            return (
                <>
                    .........
                </>
            )
        }

## JSX(JavaScript XML)

--> jsx allows you to write HTML like syntax inside javascript.
--> jsx is not HTML but similar
--> Must return only one parent element
--> use curly braces {} for embedding javascript
--> All jsx elements must be closed.

## Props

--> Props allow data to be passed from parent to child components.
--> Props are read-only(cannot be modified inside child components)
--> Can pass strings, numbers, objects, arrays
--> Use defaultProps to provide fallback values.

### Example

## Parent.jsx

const Parent = () => {
let propsValue = "Hello world ";
return (
<>

<div>
<h1>hello</h1>
<Child propsvalue={propsValue} />
</div>
</>
);
};

export default Parent;

## Child.jsx

const Child = (props) => {
return (

<div>
<h1>Child  {props.propsvalue}</h1>
</div>
);
};

export default Child;

## State

--> State is mutable data that react Components manage internally.
--> state updates re-render the component
--> Always use setState to update values
--> Functional components use useSate()
--> while class components use this.state

## Example

## Example

const Example =()=>{
return(
let [count, setCount] =useState(0)
function increment(){
setCount(count+1)
}

<div>
 <h1>count: {count}<h1>
 <button onClick{()=>{increment()}}>Increment</button>
</div>
    )

}

## Event Handling

--> Event Handling in react allows interaction with users through actions like clicking buttion, filling forms, and changing input fields.
--> React provides built in methods like onclick, onChange and onSubmit to handle events efficiently.

## Handling Click Events

--> Click events are triggered when a user clicks a button or an element
(i.e) refer the StateExample
--> onClick={()=>increment()} triggers the function when clicked.

## Handling Changes Events

--> this allows react to capture and update input field values dynamically

## Example

const Example=()=>{
let [name,setName] =useState("");
function handleChange(event){
setName(event.target.value);
}

    return(
        <>
        <input type="text" value ={name} onChange={handleChange} >
        <p>{name}</p>
        </>
    )

}

--> onChange={handleChange} captures input changes
--> Update state(setName) to store user input dynamically.

## Handling Form Submission

--> form submission prevents page reload and processes uer input

## Example

const Form = () => {
let [email, setEmail] = useState();
function formSubmit() {
console.log("successfully submited");
}
return (
<>

<form onSubmit={formSubmit} action="">
<h1>Form</h1>
<input
type="email"
value={email}
onChange={(event) => {
setEmail(event.target.value);
}}
/>
<button type="submit">submit</button>
</form>
</>
);
};

export default Form;

--> onSubmit={formSubmit} prevents default page reload
--> captures input value before submission

## Conditional Rendering

--> Conditional Rendering allows you to show or hide elements based on state or props in react.
--> This is useful when controlling UI behavior dynamically.

# mostly using rendering

### Ternary Opertor( ? : )

--> best for simple conditional rendering inside JSX.
--> used in authentication pages, dashboards, and role-based UI.

## example

    <h2>{isLoggedIn ? "Welcome back!" : "Please log in."}</h2>;

## Logical AND ( && ) and State-based Conditional Rending ( useState )

--> commonly used when conditionally showing UI elements
--> used in navigation bars, filters, pop-ups and modals
--> useful for dynamic UI Changes ( toggle menus, show/hide modals)

## example

const Sidebar = () => {
const [showMenu, setShowMenu] = useState(false);

return (

<div>
<button onClick={() => setShowMenu(!showMenu)}>Toggle Menu</button>
{showMenu && <nav>Menu Items</nav>}
</div>
);
};

## API-driven Conditional rendering

--> Display loading states or UI when data is available
--> used in dashboard statistics, user profiles, and loading screens

## example

const UserProfile = ({ user }) => {
return (

<div>
{user ? (
<h2>Welcome, {user.name}!</h2>
) : (
<h2>Loading...</h2>
)}
</div>
);
};

# List & Keys

--> list in react are used to render multiple elements dynamically using .map()
--> Keys help react efficiently track changes and optimize rendering

## Rendering Lists using .map()

--> React uses .map() to loop through arrays and generate multiple UI elements dynamically.

## Example

const ListMap = () => {
const userList = ["suresh", "tamil", "nandha", "hari"];
return (
<>

<ul>
{userList.map((user, index) => {
return <li key={index}>{user}</li>;
})}
</ul>
</>
);
};

--> Each item is rendered as a <li> dynamically
--> Keys(key={user}) improve performance and prevent rendering issues.

## Why Use Keys?

--> Keys help react identify which elements changes, added or removed effieciently.
--> Without Keys, react re-renders the entire list unncessarily.

## REndering lists with components

--> Instead of rendering items directly, pass lists as props.
import React from "react";

const ListMap = ({ userList }) => {
return (
<>

<ul>
{userList.map((user, index) => {
return <li key={index}>{user}</li>;
})}
</ul>
</>
);
};

export default ListMap;

## Rendering Lists with Conditional rendering

--> Use conditional rendering when data may be missing
import React from "react";

const ListMap = ({ userList }) => {
return (
<>

<ul>
{userList.length < 0 ? (
<ul>
{
userList.map((user)=>{
return(
<li key={user}>{user}</li>
)
})
}
</ul>
) : (
<p>No users found</p>
)}
</ul>
</>
);
};

export default ListMap;

## Forms Handling in React

--> React provides two ways to handles from inputs

## 1) controlled Components

    --> react manages form state using useState
    --> in controlled Components, react manages form input via state (useState).
    --> State (useState ) controls the input field dynamically.
    --> Form values update in Teact's Sate, ensuring better control
    --> Mostly recommended approach in React projects.
    --> Controlled components are preferred for react apps as they ensure better data flow, validation, and controlled behavior.

## Example

const ControlledComponents = () => {
let [name, setName] = useState("");
let [password, setPassword] = useState("");
function submitForm() {
console.log("name : " + name);
console.log("password : " + password);
}
return (
<>

<form onSubmit={submitForm}>
<input
type="text"
value={name}
onChange={(event) => {
setName(event.target.value);
}}
/>
<input
type="password"
value={password}
onChange={(event) => {
setPassword(event.target.value);
}}
/>
<button type="submit">Submit</button>
</form>
</>
);
};

export default ControlledComponents;

## example -2 multiple field value using state handles with multiple inputs

Controlled components are preferred for react apps as they ensure better data flow, validation, and controlled behavior.

const MultipleValueForm = () => {
let [formdata, setFormata] = useState({ name: "", email: "", password: "" });
function handleEvent(e) {
setFormata(
{ ...formdata, [e.target.name]: e.target.value },
{ ...formdata, [e.target.email]: e.target.value },
{ ...formdata, [e.target.password]: e.target.value }
);
}
function submitForm() {
console.log("successfully submit");
}
return (
<>

<form onSubmit={submitForm}>
<h1>multiple field form</h1>
<input type="text" value={formdata.name} onChange={handleEvent} />
<input type="email" value={formdata.email} onChange={handleEvent} />
<input
          type="password"
          value={formdata.password}
          onChange={handleEvent}
        />
<button type="submit">submit</button>
</form>
</>
);
};

## 2) Uncontrolled Components

--> The form elements handle their own state using refs
--> in Uncontrolled Components from elements manage their own state.

## example

import React from "react";
import { useRef } from "react";

const UncontrolledForm = () => {
let refname = useRef();
let refPassword = useRef();
function submitForm() {
console.log(refname.current.value);
}
return (
<>

<form onSubmit={submitForm} action="">
<h1>UnControlled Form</h1>
<input type="text" ref={refname} />
<input type="password" ref={refPassword} />
<button type="submit">Submit</button>
</form>
</>
);
};

export default UncontrolledForm;
