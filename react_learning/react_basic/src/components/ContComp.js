import React, { useState } from 'react';
const ContComp=()=>{
   const [concom1,setConCom1]=useState("");
   return <div>
       <input type="text" value={concom1} onChange={(e)=>{setConCom1(e.target.value)}}/>
       <h1>{concom1}</h1>
   </div>
}

export default ContComp;