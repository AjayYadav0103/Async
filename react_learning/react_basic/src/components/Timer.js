import React, { useEffect, useState } from 'react'
import TestUnmountingUsinguseEffect from './TestUnmountingUsinguseEffect';
function Timer() {
 const[isDisplay,setisDisplay]=useState(false);
 useEffect(()=>{
     return ()=> console.log('Demounting');
 },[])
  return <div>
      <button onClick={()=>{
          setisDisplay(!isDisplay);
      }}>Toggle State</button>
    {isDisplay?<TestUnmountingUsinguseEffect/>:null}
    </div>
  
}

export default Timer