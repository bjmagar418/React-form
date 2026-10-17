import React from "react";
import {useState} from "react";

function App() {
  const [name,setName] =useState('');
    const [heading,setHeading] =useState('');

  function handleChange(){
    setName(event.target.value);
  }
  function handleClick (){
   setHeading(name)
  }
  return (
    // <form >

    
    // <div className="container">
    //   <h1>Hello {heading}</h1>
    //   <input onChange={handleChange} value={name} type="text" placeholder="What's your name?" />
    //   <button type='submit' onClick={handleClick}>Submit</button>
    // </div>
    // </form>
     <form onSubmit={handleClick} >

    
    <div className="container">
      <h1>Hello {heading}</h1>
      <input onChange={handleChange} value={name} type="text" placeholder="What's your name?" />
      <button type='submit' >Submit</button>
    </div>
    </form>
  );
}

export default App;
