import React, { useState } from 'react';
const DemoFunctionalComponent=()=>{
    const [isValid,setisValid]=useState(false);
  const verifyUser = ()=> {
    const userId=document.getElementById("uniqueId").value;
    const password=document.getElementById("passwordId").value;
    const onlyUser={
      userId:"Arpit",
      password:"123"
    }
   if(userId==onlyUser.userId && password==onlyUser.password){ 
     setisValid(true);
   }
   else alert("False Data");
  }
  return (
    isValid?<div>Welcome to Home page</div>:<div className="App">
      <h1>Facebook</h1>
      <label>Email or phone</label>
      <input type="text" id="uniqueId"></input>
      <label>Password</label>
      <input type="password" id="passwordId"></input>
      <button onClick={verifyUser}>Log in</button>
      
    </div>
  );
}
export default DemoFunctionalComponent