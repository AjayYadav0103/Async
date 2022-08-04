import React, { useRef } from 'react';

const UnConCom=()=>{
    const refManu=useRef("");
    const valueIncreament=()=>{
       const value1=document.getElementById("in1").value;
       console.log(value1);
    }
return <div>
    <input type="text" ref={refManu} onChange={()=>{console.log(refManu.current)}}></input>
    <h1>{refManu.current.value}</h1>
    <input type="text" id="in1" onChange={valueIncreament}></input>
</div>
}

export default UnConCom;