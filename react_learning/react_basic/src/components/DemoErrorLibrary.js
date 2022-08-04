import React, { useState } from 'react'
import {useErrorHandler} from 'react-error-boundary'

function DemoErrorLibrary({fullName}) {
  const[count,setCount]=useState(0);
  const errorHamdler= useErrorHandler();
  const handleClick=()=>{
    try {
        if(count===5){
          throw new Error("This is not Possible"); 
        }
        else {
            setCount(count=>count+1); 
        }
    } catch (error) {
        errorHamdler(error);
    }
  }
  return <div>
       Hi-{fullName.firstName.toUpperCase()}-{fullName.lastName.toUpperCase()}
       <button onClick={handleClick}>Counter:{count}</button>
      </div>
 
}

export default DemoErrorLibrary