import React, { Component } from 'react';

export default class CFunctionClick extends Component {
    constructor(props){
        super(props)
        //this.changeEvent=this.changeEvent.bind(this);
        //debugger;
        this.state={
            course:"M.TECH",
            props:this.props.years
        }
    }
    changeEvent(){
        this.setState({course:"B.TECH"})
        console.log("Hello class Event Handler.....",this);
    } 
    render() {
        
        const newNumber=this.props.number.map(function(numbers){return <li key={numbers}>{numbers}</li>});
        //debugger;
    return <div>
         <button onClick={()=>{this.changeEvent()}}>Class Click Me</button>
         {this.state.course}{this.state.props}
         <ul>
           {newNumber}
         </ul>    
    </div>;
  }
}
