import { useEffect, useState } from "react";

const MouseControl = () =>{
    const [mv,setMv]=useState({x:0,y:0});
    
    const handleMouseMove=(e)=>{
        setMv({x:e.clientX,y:e.clientY});
    }

    useEffect(()=>{
        console.log("FunctionalComponent");
        window.addEventListener("mousemove",handleMouseMove);
    },[])

    return <div>
     {`X:${mv.x}`}
     {`Y:${mv.y}`}
    </div>
}

export default MouseControl;