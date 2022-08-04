import React, { Component } from 'react';

export class ClassCounterOne extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0,
       name:''
    }
  }

  componentDidUpdate(prevProps,prevState){
      console.log(prevState.count);
      console.log(this.state.count);
      if(prevState.count!==this.state.count){
      console.log("testing......");
      document.title=`Ren:${this.state.count}`;
    }
    }
  
    render() {
    return <div>
        <input type='text' onChange={(e)=>{this.setState({name:e.target.value})}}></input>
        <button onClick={()=>{this.setState({count:this.state.count+1})}}>Click {this.state.count}</button>
    </div>;
  }
}

export default ClassCounterOne;
