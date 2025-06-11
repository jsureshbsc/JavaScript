import { use, useState } from "react"
import styled from "styled-components"

const ChangingName =()=>{
     let usernameList =[{name:'suresh',age:23,gender:"male"},{name:'tamil',age:23,gender:"male"}]
    let Button = styled.button
    `
     background-color: purple;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    font-size: 18px;
    font-family: "Courier New", Courier, monospace;
    color: white;
    padding: 20px;
    height : 10px;
    width: 100px;
    margin-left: 10px;
    text-align: center;
    cursor: pointer;
    `
    let [selectDetails,SetDetails] =useState('');
    const userDetails=(name)=>{

        SetDetails(name);
    }

    return(
        <>
        <h1>{{selectDetails}}</h1>
       {
           usernameList.map((usernameList)=>{
            return (
                <div>
                <Button onClick={()=>{userDetails(usernameList.name,usernameList.age,usernameList.gender)}}>{usernameList.name}</Button>
                </div>
            )
           })
        }
    
        </>
    )

}
export default ChangingName;