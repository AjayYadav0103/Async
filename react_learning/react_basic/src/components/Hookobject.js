import React,{useState} from 'react';

const Hookobject=()=>{
    const [name,setName]=useState({firstName:'',lastName:''});
    const handleName=(e)=>{
        if(e.target.name=='firstName')
        setName({firstName:e.target.value,lastName:name.lastName})
        else
        setName({firstName:name.firstName,lastName:e.target.value})
    }
    return <div>
        <form>
            <input type="text" name='firstName' onChange={handleName}></input>
            <input type="text" name='lastName' onChange={handleName}></input> 
        </form>
        -----------1{name.firstName}<br/>
        ----------------2{name.lastName}<br/>
        {JSON.stringify(name)}
    </div>
}

export default Hookobject;