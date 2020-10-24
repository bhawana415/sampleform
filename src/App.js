import React, { useState } from "react";

const App =()=>{

  const [name,setName]=useState();
  const [fullName,setFullName]=useState();
  const inputEvent =(event)=>{
    setName(event.target.value);
  }
  
  const onSubmit =()=>{
    setFullName(name); // value store in name variable
  }
  return(


    <>
    <div>
  <h1>HELLO {fullName}</h1>
    <input type ="text" placeholder="Enter your name"value={name} onChange={inputEvent}/>
    <button onClick={onSubmit}>Click me </button>
    </div>
    </>
  );
};


export default App;