import React, { useEffect, useRef, useState } from 'react';

const CounterAddNDiffFea = () =>{
    const isInitialMount=useRef(true);
    const [counter,setCounter]=useState(0);
    const [name,setName]=useState({firstName:'Ram',lastName:'Singh'});
    const [countadd,setCountadd]=useState(0);
    const [countsub,setCountsub]=useState(0);
    const [countFor,setcountfor]=useState(0);
    const handleCounter=()=>{
        setCounter(oldValues=>oldValues+1);
    }
    const handleName = ()=>{
        setName({
            firstName:'Shyam',
            lastName:'Kapoor'
        });
    }
    const handleCountadd=()=>{
       setCountadd(oldvalue => oldvalue+1)
    }

    const handleCountsub=()=>{
        setCountsub(oldvalue=>oldvalue-1)
    }

    useEffect(()=>{
        if(isInitialMount.current){
            isInitialMount.current=false;
        }
        else{
            console.log('Hi I am Effect');
        }
    },[countadd,countsub])

    const handleForLoop=()=>{
        for(let i=0;i<10;i++){
            console.log("housekeeping");
            setcountfor(oldcountFor=>oldcountFor+1);
        }
    }

    return <div>
        <button onClick={handleCounter}>Counter {counter}</button>
        {name.firstName}
        {name.lastName}
        <button onClick={handleName}>Click Me</button>
        <button onClick={handleCountadd}>Increment {countadd}</button>
        <button onClick={handleCountsub}>Decrement {countsub}</button>
        <button onClick={handleForLoop}>Count parameter {countFor}</button>
    </div>
}

export default CounterAddNDiffFea;