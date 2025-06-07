import React from 'react'
 function h1element(){
    return{
        backgroundColor : 'blue'
    }
 }
const Header = () => {
   let username=['suresh','tamil','durga','subash']
function changetext(){
   
}
   
  return (
    <div>
        <h1 style={h1element()}>React JS </h1>
        
         <button>click</button>
    </div>
   
  )
}

export default Header