import React, { Component } from 'react';

export class LifeCycleB extends Component {
  

    constructor(props){
        console.log("LifeCycleB: constructor");
      super(props);
      this.state={
          name:'Ajay'
      }
  }
  
  static getDerivedStateFromProps(props,state){
    console.log("LifeCycleB: getDerivedStateFromProps");
    return null;
  }
  
  render() {
      console.log("LifeCycleB: render");
      return <div>LifeCycleB class component</div>;
    }
  
    componentDidMount(){
      console.log("LifeCycleB: ComponentDidMount");
  }
  
  }

export default LifeCycleB;
