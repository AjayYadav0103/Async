import React, { useState } from 'react';

const Hookarray=()=>{
    const[Number,setNumber]=useState([]);
    const genRanNum=()=>{
        //debugger;
     setNumber([...Number,{
        id:Number.length,
        values:Math.floor(Math.random()*11)
     }]);
    }
return <div>
    <button onClick={genRanNum}>Generate random Number</button>
    <ul>
    {Number.map(genList=><li key={genList.id}>{genList.values}</li>)}
    </ul>
</div>
}

export default Hookarray;