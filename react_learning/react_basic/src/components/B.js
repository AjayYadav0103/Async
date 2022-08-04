import React,{Component} from 'react';
import {Consumer} from './context.js'
class B extends Component{
render(){
    return <div>
    <h1>B Component</h1>
    <Consumer>
        {({data,handleCheck})=> {
            return <div>
                <h1>{data.roll}</h1>
                <button onClick={handleCheck}>ChangeRollNumber</button>
                  </div>
                }}
    </Consumer>
    </div>
}
}

export default B;