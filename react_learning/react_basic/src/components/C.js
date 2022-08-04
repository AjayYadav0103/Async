import React,{Component} from 'react';
import {Consumer} from './context.js'
class C extends Component{
render(){
    return <div>
    <h1>C Component</h1>
    <Consumer>
        {({data,handleCheck1})=>{return <div>
            <h1>{data.name}</h1>
            <button onClick={handleCheck1}>ChangeRollNumber</button>
        </div>}}
    </Consumer>
    </div>
}
}

export default C;