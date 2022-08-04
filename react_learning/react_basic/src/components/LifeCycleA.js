import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';

export class LifeCycleA extends Component {

    constructor(props){
      console.log("LifeCycleA: constructor");
    super(props);
    this.state={
        name:'Ajay'
    }
}

static getDerivedStateFromProps(props,state){

  console.log("LifeCycleA: getDerivedStateFromProps");
  return null;
}

render() {
    console.log("LifeCycleA: render");
    return <div>LifeCycleA class component
      <LifeCycleB></LifeCycleB>
    </div>;
  }

  componentDidMount(){
    console.log("LifeCycleA: ComponentDidMount");
}

}



export default LifeCycleA;
