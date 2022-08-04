import React, { Component } from 'react';

export default class Form extends Component {
    constructor(){
        super();
        this.state={
            userName:'',
            address:''
        }
    }
    handleState=(event)=>{
       this.setState({
           userName:event.target.value
       })
    }
    handleAddress=(event)=>{
        this.setState({
            address:event.target.value
        })
     }

    handleSubmit = (event)=>{
        event.preventDefault();
        alert(`${this.state.userName} ${this.state.address}`);
    }
  render() {
    return <form onSubmit={this.handleSubmit}>
    <div>
       <label>UserName</label>
       <input type="text" value={this.state.userName} onChange={this.handleState}></input>
       <label>Address</label>
       <input type="text" value={this.state.address} onChange={this.handleAddress}></input>
       <button type='submit'>Submit</button>
    </div>
    </form>
    
  }
}

