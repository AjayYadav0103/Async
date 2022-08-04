import React,{Component} from 'react';
import B from './B.js';
import C from './C.js'
import {Provider} from './context.js'
class A extends Component{
state={
    name:'Arpit',
    roll:93
}
handleClickContext = () =>{
    this.setState({
        roll:this.state.roll+1
    })
}
handleClickContext1 = () =>{
    this.setState({
        name:'Avni'
    })
}
render(){
    const contextValue={
        data:this.state,
        handleCheck:this.handleClickContext,
        handleCheck1:this.handleClickContext1
    }
    return <div>
    <h1>A Component</h1>
    <Provider value={contextValue}>
        <B/>
        <C/>
    </Provider> 
    </div>
}
}

export default A;